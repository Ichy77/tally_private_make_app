function filterDropDown(data) {
    let data_filtered = data.filter( element => element.type =="DROPDOWN_OPTION" );
    
    return data_filtered
}  