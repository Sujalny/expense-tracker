export function validateTransaction(body){
 const {title,amount,type,category,date}=body;
 if(typeof title!=='string'||!title.trim()||title.length>120)throw new Error('Description must contain 1–120 characters.');
 if(typeof amount!=='number'||!Number.isFinite(amount)||amount<=0||amount>1e9)throw new Error('Amount must be between 0 and 1,000,000,000.');
 if(!['income','expense'].includes(type))throw new Error('Invalid transaction type.');
 if(!['Food & dining','Shopping','Transport','Housing','Utilities','Other'].includes(category))throw new Error('Invalid category.');
 if(typeof date!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(date)||!Number.isFinite(Date.parse(date))||new Date(date).toISOString().slice(0,10)!==date)throw new Error('Invalid date.');
 return {title:title.trim(),amount:Math.round(amount*100)/100,type,category,date};
}
