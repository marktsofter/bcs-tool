// ==UserScript==
// @name         Bcs report translater
// @namespace    https://bcs.cal-consult.int/
// @version      0.1
// @description  Translate labels of the report view
// @author       Attila Dekany
// @match        https://bcs.cal-consult.int/bcs/mybcs/deputatsummary/*
// @icon         https://bcs.cal-consult.int/graphics/user_employee.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function translateReport(){
        var transDict = new Object();
        transDict = {
            0: { de: 'Anwesenheit', en: 'Presence' },
            1: { de: 'Arbeitszeit', en: 'Working time' },
            2: { de: 'Projektbuchungen', en: 'Project bookings' },
            3: { de: 'Daueraufgaben', en: 'Permanent tasks' },
            4: { de: 'Urlaub', en: 'Holiday' },
            5: { de: 'Krankheit', en: 'Illness' },
            6: { de: 'Ist', en: 'All / Actual' },
            7: { de: 'Soll', en: 'Target' },
            8: { de: 'Saldo', en: 'Balance' },
        }

        var reportTable = document.getElementById('group,Choices,deputattable_table');

        if(!reportTable){
            console.log('translate script: Error - reportTable has changed')
        }

		Object.keys(transDict).forEach((key) => {
			reportTable.innerHTML = reportTable.innerHTML.replace(transDict[key].de, transDict[key].en);
		});
    }

    function highlightAllRow(){
        var reportTable = document.getElementById('group,Choices,deputattable_table');

        if(!reportTable){
            console.log('translate script: Error - reportTable has changed')
        }

        reportTable.childNodes[3].childNodes[18].style.fontWeight="bold";
        reportTable.childNodes[3].childNodes[18].style.color="red";
    }


    // Your code here...
    translateReport();
    highlightAllRow();

})();
