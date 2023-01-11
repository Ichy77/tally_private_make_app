function addDdOption(blocksArr, new_option_text, group_id, uuid, visibility, required) {
    debug(blocksArr);
    debug(new_option_text);
   /* var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    }); */ //put into new function generateUuid

    let option =   {
        "uuid": uuid,
        "type": "DROPDOWN_OPTION",
        "groupUuid": group_id,
        "groupType": "DROPDOWN",
        "payload": {
            "index": 2,
            "isLast": false,
            "isFirst": false,
            "isHidden":visibility,
            "isRequired": required,
            "text": new_option_text
        }
    }

     
    var index = blocksArr.map(function (obj) { return obj.groupUuid; }).indexOf(group_id);

    blocksArr.splice(index, 0,option);
    return blocksArr;


}