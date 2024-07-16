
if(isElementVisible('EmployerMunicipalityId')){
    // Page 1
    // Sedište poslodavca
    selectOption('EmployerMunicipalityId', '1027');
    selectOption('EmployerPlaceId', '27894');
    selectOption('EmployerStreetId', '47646');
    selectOption('EmployerHouseNumberId', '2265182');

    // Maticni broj registra
    setValueById('EmployerActivityName', '6201 Računarsko programiranje');
    selectOption('EmployerActivityCodeId', '436');
    setValueById('EmployerContactPerson', 'Olga Vinokurova');
    setValueById('EmployerPhoneNumber', '+381612300941');
    setValueById('EmployerEmail', 'Olga.Vinokurova@xperthub.rs');

    // Podaci o slobodnom poslu
    setValueById('PositionRequiredNumberOfExecutors', '1');
    selectOption('PositionMunicipalityId', '1027');
    selectOption('PositionPlaceId', '27894');
    selectOption('PositionEmploymentTypeId', '1');
    setValueById('PositionWorkingLengthHours', '40');
    clickCheckboxkById('positionProbationWorkId');
    setValueById('PositionProbationWorkInMonths', '3');

    // Posebna zhanja I vestine
    setValueById('KnowledgeAndSkillsWorkOnComputer', 'Viši nivo');
    setValueById('KnowledgeAndSkillsForeignLanguageName', 'Ruski');
    selectOption('KnowledgeAndSkillsForeignLanguageLevelId', '3');

} else if (isElementVisible('EntityTypeId')){
    // Page 2
    selectOption('EntityTypeId', '1');

    // Podaci o adresi sedišta privrednog subjekta
    selectOption('EmploymentMunicipalityHeadquartersViewModel_MunicipalityId', '1027');
    selectOption('EmploymentPlaceHeadquartersViewModel_PopulatedPlaceId', '27894');
    selectOption('EmploymentStreetViewHeadquartersModel_StreetId', '47646');
    selectOption('EmploymentHouseNumberHeadquartersViewModel_HouseNumberId', '2265182');
    setValueById('EmploymentFloorHeadquarters', '4');
    setValueById('BusinessEntityEmail', 'Olga.Vinokurova@xperthub.rs');




}

function setValueById(id, value){
    document.getElementById(id).value = value;
}

function clickCheckboxkById(id){
   const checkbox =  document.getElementById(id);
    if(!checkbox.checked){
        document.getElementById(id).click();
    }
}

function selectOption(selectID, valueToSelect) {
    const select = document.getElementById(selectID);
    select.focus();
    if (!(select.value === valueToSelect)){
        select.value = valueToSelect;
        const changeEvent = new Event('change', { bubbles: true });
        select.dispatchEvent(changeEvent);
    }
}

function isElementVisible(id){
    const field = document.getElementById(id);
    if (!field){ 
        return false;
    } else {
        return true;
    }
}