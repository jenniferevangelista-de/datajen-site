/* Synthetic financial batch. Values are not Cogna production measurements. */
(function(root){
'use strict';
const periods=['2019-11','2019-12'];
const units=['Aurora','Horizonte','Integra'];
const amounts=[[90000,54000,72000,50000,48000,37000],[98000,56000,76000,52000,52000,38000]];
function records(period){const p=periods.indexOf(period);if(p<0)throw Error('unknown-period');return amounts[p].map((amount,i)=>({id:p*10+i+1,period,unit:units[Math.floor(i/2)],type:i%2?'expense':'revenue',amount}));}
function assess(input,period){const rows=input.filter(r=>r.period===period),ids=new Set(rows.map(r=>r.id));const checks=[{id:'records',ok:rows.length>0},{id:'unique',ok:ids.size===rows.length},{id:'amount',ok:rows.every(r=>typeof r.amount==='number'&&Number.isFinite(r.amount)&&r.amount>=0)},{id:'contract',ok:rows.every(r=>r.unit&&['revenue','expense'].includes(r.type))}];let report=null;
if(checks.every(c=>c.ok)){const groups=units.map(unit=>{const selected=rows.filter(r=>r.unit===unit);return {unit,revenue:selected.filter(r=>r.type==='revenue').reduce((s,r)=>s+r.amount,0),expense:selected.filter(r=>r.type==='expense').reduce((s,r)=>s+r.amount,0),count:selected.length};}).filter(g=>g.count);const revenue=rows.filter(r=>r.type==='revenue').reduce((s,r)=>s+r.amount,0),expense=rows.filter(r=>r.type==='expense').reduce((s,r)=>s+r.amount,0);const reconciled=Math.abs(groups.reduce((s,g)=>s+g.revenue,0)-revenue)<.005&&Math.abs(groups.reduce((s,g)=>s+g.expense,0)-expense)<.005;checks.push({id:'reconciliation',ok:reconciled});if(reconciled)report={period,rows:rows.length,revenue,expense,balance:revenue-expense,groups};}else checks.push({id:'reconciliation',ok:null});return {ok:!!report,checks,report};}
const api={periods,units,records,assess};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.CognaFinanceModel=api;
})(typeof globalThis==='undefined'?window:globalThis);
