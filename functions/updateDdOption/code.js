function updateDdOption(blocksArr,old_text, new_text) {
    debug(blocksArr);
    debug(old_text);
    debug(new_text);
    //blocksArr = blocksArr[0];
    //debug(blocksArr);

   /* Object.entries(blocksArr).forEach(([key, value]) => {
        if(key.payload.text === old_text){     
        blocksArr[key].time_created = new_text;
         }
    }); */

    for (var i = 0; i < blocksArr.length; i++) {
        if (blocksArr[i].payload.text === old_text) {
            blocksArr[i].payload.text = new_text;
          
        }
      }
   /* const indexOfObject = blocksArr.findIndex(object => {
        return object.payload.text === old_text;
      });
      

      
    blocksArr.splice(indexOfObject, 1);
      */

    return blocksArr;
}