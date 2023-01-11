function filterUniqueDropDown(data) {
    let data_filtered = data.filter( element => element.type =="DROPDOWN_OPTION" );

    const unique = [...new Map(data_filtered.map((m) => [m.groupUuid, m])).values()];
    
    
    return unique
}  