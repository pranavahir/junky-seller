const ReferenceNumber = require("../models/ReferenceNumber")

const isNullorUndefinedorEmpty = (value) => {
    let isvalid = false
    if(value !== null && value !== undefined && value !== ""){
        isvalid = true
    }
    return isvalid
}

async function fetchFromReferenceNumber(){
    var number = 0
    const fetchRef = await ReferenceNumber.find();
    if(fetchRef.length === 0){
        const saveRef = await ReferenceNumber.insertMany([{referencenumber:0}])
        // const saveRefNum = await saveRef.save()
        // console.log(saveRefNum);
    }else{
        number = fetchRef[0].referencenumber;
        const id = fetchRef[0]._id;
        const updateByOne = await ReferenceNumber.updateOne({_id:id},{$set:{referencenumber:number+1}})
        // const saveUpdate = await updateByOne.save()
        // console.log(saveUpdate);
    }
    return number
}

module.exports = {
    isNullorUndefinedorEmpty,
    fetchFromReferenceNumber
}