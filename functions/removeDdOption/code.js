function removeDdOption(blocksArr,uuid) {
    debug(blocksArr);
    debug(uuid);

    const indexOfObject = blocksArr.findIndex(object => {
        return object.uuid === uuid;
      });
      

      
    blocksArr.splice(indexOfObject, 1);


    return blocksArr;


}