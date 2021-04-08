class CharacterSheet {
    /**
     * @param {HTMLElement} element
     * @param {string} nom
     * @param {string} race
     * @param {string} classe
     * @param {string} sexe
     * @param {string} joueur
     *      @param {int} force
     *      @param {int} dexterite
     *      @param {int} constitution
     *      @param {int} intelligence
     *      @param {int} sagesse
     *      @param {int} charisme
     **/
    constructor(element, options) {
        this.element = element;
        this.this = this;
        this.options = {
            force: options.force,
            dexterite: options.dexterite,
            constitution: options.constitution,
            intelligence: options.intelligence,
            sagesse: options.sagesse,
            charisme: options.charisme,
            modForce: options.modForce,
            modDexterite: options.modDexterite,
            modConstitution: options.modConstitution,
            modIntelligence: options.modIntelligence,
            modSagesse: options.modSagesse,
            modCharisme: options.modCharisme
        }
        $(element).html("");
        this.showCharacterSheet();
    }

    showCharacterSheet() {
        this.tabs = $('<div class="tab-content" id="pills-tabContent"/>').appendTo(this.element);

        //DOM CARACTERISTIQUE
        let caracDiv = $(' <div class="tab-pane fade show active" id="pills-carac" role="tabpanel" aria-labelledby="pills-carac-tab"/>').appendTo(this.tabs);
        let caracTable = $(' <table class="table caption-top caracTable" style="max-width:800px;"/>').appendTo(caracDiv);
        let caracTitle = $('<h1>CARACTÉRISTIQUE</h1>').appendTo(caracTable);
        let caracTableBody = $('<tbody/>').appendTo(caracTable);

        //Premiere ligne nom du perso/race/level
        let characFirstRow = $("<tr/>").appendTo(caracTableBody);
        let nameOfCharacLbl = $('<td><label for="name" class="label characName">Nom du perso</label></br><input type="text" class="input characName"/></td>').appendTo(characFirstRow);
        let race = $('<td><label for="race"> Race </label></br><select name="race" id="race"> <option value = " " ></option><option value = "Humain" > Humain </option > <option value = "Elfe" > Elfe </option> <option value = "Nain" > Nain </option > <option value = "Gnome" > Gnome </option> <option value = "Halfelin" > Halfelin </option > <option value = "Demi-Elfe" > Demi-Elfe </option> <option value = "Demi-Orc" > Demi-Orc </option > </select></td>').appendTo(characFirstRow);
        let bonusRace = $('<td id="bonusRaceTd"><label for="bonusRace">Appliquer bonus de race à : </label></br><select name="capacités" id="capacite"><option value = " " ></option><option value = "force" > Force </option > <option value = "dext" > Dextérité </option> <option value = "constit" > Constitution </option > <option value = "intel" > Intelligence </option> <option value = "sage" > Sagesse </option > <option value = "charism" > Charisme </option></select></td>').appendTo(characFirstRow);
        bonusRace.hide();
        race.change(function() {
            if ($('#race option:selected').val() =="Humain" || $('#race option:selected').val() =="Demi-Elfe" || $('#race option:selected').val() =="Demi-Orc") {
                $('#bonusRaceTd').fadeIn();
            }else if($('#race option:selected').val() =="Elfe"){
                $('#dextScore').data("bonusrace", 2);
                $('#intelScore').data("bonusrace", 2);
                $('#constitScore').data("bonusrace", -2);
                $('#bonusRaceTd').fadeOut();
            }else if($('#race option:selected').val() =="Nain"){
                $('#constitScore').data("bonusrace", 2);
                $('#sageScore').data("bonusrace", 2);
                $('#charismScore').data("bonusrace", -2);
                $('#bonusRaceTd').fadeOut();
            }else if($('#race option:selected').val() =="Gnome"){
                $('#constitScore').data("bonusrace", 2);
                $('#charismScore').data("bonusrace", 2);
                $('#forceScore').data("bonusrace", -2);
                $('#bonusRaceTd').fadeOut();
            }else if($('#race option:selected').val() =="Halfelin"){
                $('#dextScore').data("bonusrace", 2);
                $('#charismScore').data("bonusrace", 2);
                $('#forceScore').data("bonusrace", -2);
                $('#bonusRaceTd').fadeOut();
            }else{
                $('#bonusRaceTd').fadeOut();
            }

        })
        bonusRace.change(function(){
            let capaciteSelected = $('#capacite option:selected').val();
            let capaciteId = "#"+capaciteSelected+"Score";
            console.log(capaciteId);
            $(capaciteId).data("bonusrace", 2)
            console.log('bonus selected = '+$(capaciteId).data("bonusrace"))
        })
        //deuxieme ligne classes
        let characSecondRow = $("<tr/>").appendTo(caracTableBody);
        let class1OfCharac = $('<td><label for="classe1">Classe </label><br/><select name="classe1" id="classe1"><option value = " " > </option> <option value = "Barbare" > Barbare </option> <option value = "Barde" > Barde </option> <option value = "Druide" > Druide </option> <option value = "Ensorceleur" > Ensorceleur </option> <option value = "Guerrier" > Guerrier </option> <option value = "Magicien" > Magicien </option> <option value = "Moine" > Moine </option> <option value = "Paladin" > Paladin </option> <option value = "Prêtre"> Prêtre </option> <option value = "Rodeur"> Rodeur </option> <option value ="Roublard"> Roublard </option></select></td> ').appendTo(characSecondRow);
        let class2OfCharac = $('<td><label for="classe2">Classe 2</label><br/><select name="classe_2" id="classe2"><option value = " " >  </option><option value = "Barbare" > Barbare </option> <option value = "Barde" > Barde </option> <option value = "Druide" > Druide </option> <option value = "Ensorceleur" > Ensorceleur </option> <option value = "Guerrier" > Guerrier </option> <option value = "Magicien" > Magicien </option> <option value = "Moine" > Moine </option><option value = "Paladin" > Paladin </option><option value = "Prêtre" > Prêtre </option><option value = "Rodeur" > Rodeur </option><option value = "Roublard" > Roublard </option></select></td> ').appendTo(characSecondRow);
        let class3OfCharac = $('<td><label for="classe3">Classe 3</label><br/><select name="classe_3" id="classe3"><option value = " " >  </option><option value = "Barbare" > Barbare </option> <option value = "Barde" > Barde </option> <option value = "Druide" > Druide </option> <option value = "Ensorceleur" > Ensorceleur </option> <option value = "Guerrier" > Guerrier </option> <option value = "Magicien" > Magicien </option> <option value = "Moine" > Moine </option><option value = "Paladin" > Paladin </option><option value = "Prêtre" > Prêtre </option><option value = "Rodeur" > Rodeur </option><option value = "Roublard" > Roublard </option></select></td> ').appendTo(characSecondRow);
        //troisieme ligne alignement
        let characThirdRow = $("<tr/>").appendTo(caracTableBody);
        let alignement = $('<td><label for="alignement"> Alignement </label></br><select name="alignement" id="alignement"><option value = " " >  </option><option value = "Loyal Bon" > Loyal Bon </option> <option value = "Loyal Neutre" > Loyal Neutre </option> <option value = "Loyal Mauvais" > Loyal Mauvais </option> <option value = "Neutre Bon" > Neutre Bon </option> <option value = "Neutre" > Neutre </option> <option value = "Neutre Mauvais" > Neutre Mauvais </option> <option value = "Chaotique Bon" > Chaotique Bon </option><option value = "Chaotique Neutre" > Chaotique Neutre </option><option value = "Chaotique Mauvais" > Chaotique Mauvais </option></select ></td> ').appendTo(characThirdRow);
        let characLevelLbl = $("<td><label for='niveau' class='characLvlLbl'>Niveau du Personnage </label></br><input type='number' class='characLvlInpt' value='1' /></td>").appendTo(characThirdRow);
        //LOGIQUE CARACTERISTIQUE


        //DOM HABILITE
        let abilityDiv = $('<div class="tab-pane fade" id="pills-ability" role="tabpanel" aria-labelledby="pills-ability-tab"/>').appendTo(this.tabs);
        let abilityTable = $('<table class="table charac-tb abiliyTab"/>').appendTo(abilityDiv);
        let abilityTitle = $('<h1>HABILITÉS</h1>').appendTo(abilityTable);
        let messageRoll = $('<tr><td id="messageRoll" style="text-align:center;" colspan="3">Choisir une méthode pour roll les abilités de votre personnage.</td></tr>').appendTo(abilityTable);
        let methodRoll = $('<tr id="methodRoll"><td><input type="radio" class="btn-check" id="methodStandard" name="method" autocomplete="off"><label class="btn btn-outline-success metStandard" for="methodStandard">Méthode standard</label></td><td><input type="radio" class="btn-check" id="methodClassic" name="method" autocomplete="off"><label class="btn btn-outline-secondary metClassic" for="methodClassic">Méthode classique</label></td><td><input type="radio" class="btn-check" id="methodheroic" name="method" autocomplete="off"><label class="btn btn-outline-danger metHeroic" for="methodheroic">Méthode héroïque</label></td></tr>').appendTo(abilityTable);
        let avmTr = $('<tr/>').appendTo(abilityTable);
        let avmTh = $('<th></th><th> Valeur </th><th> Val Temporaire </th><th> Modificateur </th><th> Roll </th>').appendTo(avmTr);
        let forceTr = $('<tr><td> Force </td><td><input type="number" value="' + this.options.force + '" id="forceScore" min="8" max="20" data-bonusRace="0"></td><td><input type="number" value="' + this.options.force + '" id="forceScoreTemp"></td><td><input type="number " value="' + this.options.modForce + '" id="forceMod"></td><td class="rollTd"><input class="btnRoll" type="button" value="Roll" id="forceScoreRoll"></td></tr>').appendTo(abilityTable);
        let dextTr = $('<tr><td> Dextérité </td><td><input type="number" value="' + this.options.dexterite + '" id="dextScore" min="8" max="20" data-bonusRace="0"></td><td><input type="number" value="' + this.options.dexterite + '" id="dextScoreTemp"></td><td><input type="number" value="' + this.options.modDexterite + '" id="dextMod"></td><td class="rollTd"><input type="button" class="btnRoll" value="Roll" id="dextScoreRoll"></td></tr>').appendTo(abilityTable);
        let constitTr = $('<tr><td> Constitution </td><td><input type="number" value="' + this.options.constitution + '" id="constitScore" min="8" max="20" data-bonusRace="0"></td><td><input type="number" value="' + this.options.constitution + '" id="constitScoreTemp"></td><td><input type="number" value="' + this.options.modConstitution + '" id="constitMod"></td><td class="rollTd"><input type="button" class="btnRoll" value="Roll" id="constitScoreRoll"></td></tr>').appendTo(abilityTable);
        let intelTr = $('<tr><td> Intelligence </td><td><input type="number" value="' + this.options.intelligence + '" id="intelScore" min="8" max="20" data-bonusRace="0"></td><td><input type="number" value="' + this.options.intelligence + '" id="intelScoreTemp"></td><td><input type="number" value="' + this.options.modIntelligence + '" id="intelMod"></td><td class="rollTd"><input type="button" class="btnRoll" value="Roll" id="intelScoreRoll"></td></tr>').appendTo(abilityTable);
        let sageTr = $('<tr><td> Sagesse </td><td><input type="number" value="' + this.options.sagesse + '" id="sageScore" min="8" max="20" data-bonusRace="0"</td><td><input type="number" value="' + this.options.sagesse + '" id="sageScoreTemp"></td><td><input type="number" value="' + this.options.modSagesse + '" id="sageMod"></td><td class="rollTd"><input type="button" class="btnRoll" value="Roll" id="sageScoreRoll"></td></tr>').appendTo(abilityTable);
        let charismTr = $('<tr><td> Charisme </td><td><input type="number" value="' + this.options.charisme + '" id="charismScore" min="8" max="20" data-bonusRace="0"></td><td><input type="number" value="' + this.options.charisme + '" id="charismScoreTemp"></td><td><input type="number" value="' + this.options.modCharisme + '" id="charismMod"></td><td class="rollTd"><input type="button" class="btnRoll" value="Roll" id="charismScoreRoll"></td></tr>').appendTo(abilityTable);
        //LOGIQUE ABILITÉ
        $('.rollTd').hide();
        methodRoll.change(function() {
            if ($('#methodStandard:checked').val() == 'on') {

                $('#messageRoll').text('On roll 4D6 et on supprime le plus petit résultat.');
                $('.rollTd').show();
                $('.btnRoll').click(function() {
                    let btnUsed = $(document.activeElement).attr('id');
                    $('#' + btnUsed).attr('type', 'text');
                    let roll1 = Math.floor(Math.random() * 6) + 1;
                    let roll2 = Math.floor(Math.random() * 6) + 1;
                    let roll3 = Math.floor(Math.random() * 6) + 1;
                    let roll4 = Math.floor(Math.random() * 6) + 1;
                    let smallestRoll = Math.min(roll1, roll2, roll3, roll4);
                    let total = roll1 + roll2 + roll3 + roll4;
                    let btnId = '#' + btnUsed;
                    let abilityScore = btnUsed.replace('Roll', '');
                    let abilityScoreId = "#" + abilityScore;
                    let bonusRaceAbility = $(abilityScoreId).data("bonusrace");
                    let final = (roll1 + roll2 + roll3 + roll4) - smallestRoll + bonusRaceAbility;
                    if(bonusRaceAbility == 0){
                        $(btnId).attr('value', roll1 + ' + ' + roll2 + ' + ' + roll3 + ' + ' + roll4 + ' = ' + total + ' - ' + smallestRoll + ' = ' + final)
                    } else {
                        $(btnId).attr('value', roll1 + ' + ' + roll2 + ' + ' + roll3 + ' + ' + roll4 + ' = ' + total + ' - ' + smallestRoll + ' + ' + 'Bonus '+ bonusRaceAbility +' = ' + final);
                    }
                   
                    let abilityScoreTempId = abilityScoreId + "Temp";
                    $(abilityScoreId).attr('value', final);
                    $(abilityScoreTempId).attr('value', final)
                    let abilityModId = abilityScoreId.replace('Score', 'Mod')
                    let abilityModInt = Math.trunc(Math.floor($(abilityScoreId).val() - 10) / 2);
                    $(abilityModId).attr('value', abilityModInt);
                    $('.btn-check').click(function() {
                        $('#pills-tab').tabs({
                            active: 1
                        });
                    })
                });
            } else if ($('#methodClassic:checked').val() == 'on') {

                $('#messageRoll').text('On roll 3D6.');
                $('.rollTd').show();
                $('.btnRoll').click(function() {
                    let btnUsed = $(document.activeElement).attr('id');
                    $('#' + btnUsed).attr('type', 'text');
                    let roll1 = Math.floor(Math.random() * 6) + 1;
                    let roll2 = Math.floor(Math.random() * 6) + 1;
                    let roll3 = Math.floor(Math.random() * 6) + 1;
                    let btnId = '#' + btnUsed;
                    let abilityScore = btnUsed.replace('Roll', '');
                    let abilityScoreId = "#" + abilityScore;
                    let bonusRaceAbility = $(abilityScoreId).data("bonusrace");
                    let final = roll1 + roll2 + roll3 + bonusRaceAbility;
                    if(bonusRaceAbility == 0){
                        $(btnId).attr('value', roll1 + ' + ' + roll2 + ' + ' + roll3 + ' = ' + final)
                    } else {
                         $(btnId).attr('value', roll1 + ' + ' + roll2 + ' + ' + roll3 + ' + ' + 'Bonus '+ bonusRaceAbility + ' = ' + final)
                    }
                    let abilityScoreTempId = abilityScoreId + "Temp";
                    $(abilityScoreId).attr('value', final);
                    $(abilityScoreTempId).attr('value', final)
                    let abilityModId = abilityScoreId.replace('Score', 'Mod')
                    let abilityModInt = Math.trunc(Math.floor($(abilityScoreId).val() - 10) / 2);
                    $(abilityModId).attr('value', abilityModInt);
                    $('.btn-check').click(function() {
                        $('#pills-tab').tabs({
                            active: 1
                        });
                    })
                });
            } else if ($('#methodheroic:checked').val() == 'on') {
                $('#messageRoll').text('On roll 2D6 et on ajoute 6 au résultat.');
                $('.rollTd').show();
                $('.btnRoll').click(function() {
                    let btnUsed = $(document.activeElement).attr('id');
                    $('#' + btnUsed).attr('type', 'text');
                    let roll1 = Math.floor(Math.random() * 6) + 1;
                    let roll2 = Math.floor(Math.random() * 6) + 1;
                    let btnId = '#' + btnUsed;
                    let abilityScore = btnUsed.replace('Roll', '');
                    let abilityScoreId = "#" + abilityScore;
                    let bonusRaceAbility = $(abilityScoreId).data("bonusrace");
                    let final = roll1 + roll2 + 6 + bonusRaceAbility;
                    if(bonusRaceAbility == 0){
                        $(btnId).attr('value', roll1 + ' + ' + roll2  + ' + 6 = ' + final)
                    } else {
                         $(btnId).attr('value', roll1 + ' + ' + roll2  + ' + 6 + ' + 'Bonus '+ bonusRaceAbility + ' = ' + final)
                    }
                   /* let btnId = '#' + btnUsed;    
                    let bonusRaceAbility = $(btnId).data("bonusrace");
                    let final = roll1 + roll2 + 6 + bonusRaceAbility;
                    if(bonusRaceAbility == 0){
                        $(btnId).attr('value', roll1 + ' + ' + roll2 + ' + '+ '6' + ' = ' + final)
                    } else {
                         $(btnId).attr('value', roll1 + ' + ' + roll2 + ' + ' + 6 + ' + ' + 'Bonus de race : '+ bonusRaceAbility + ' = ' + final)
                    }*/
                    let abilityScoreTempId = abilityScoreId + "Temp";
                    $(abilityScoreId).attr('value', final);
                    $(abilityScoreTempId).attr('value', final)
                    let abilityModId = abilityScoreId.replace('Score', 'Mod')
                    let abilityModInt = Math.trunc(Math.floor($(abilityScoreId).val() - 10) / 2);
                    $(abilityModId).attr('value', abilityModInt);
                    $('.btn-check').click(function() {
                        $('#pills-tab').tabs({
                            active: 1
                        });
                    })
                });
            }
        })

        /**
        //section Armure + Jet de Sauvegarde
        let armorSave = $('<div id="armorSaveContainer" class="container d-flex"/>').appendTo(this.tabs);
        //Armure
        let armorSelect = $('<div class="selectionArmure col-6"/>').appendTo(armorSave);
        let armorSelectTitle = $('<h3> Armure </h3></br>').appendTo(armorSelect);
        let armorTable = $('<table class="armorTable table"/>').appendTo(armorSelect);
        let armors = $('<tr><td><h6> Armure Équippée </h6><select id="equippedArmor" class="mb-2" ><optgroup id="noArmor" value="No Armor" label="Sans Armure"><option value="unarmored" class="armorSelect" data-type="unarmored" selected="selected">Aucune</option><optgroup id="lightArmor" value="Light Armor" label="Armure Légère"><option value="padded" class="armorSelect" data-type="lightarmored">Armure Matelassée</option><option value="leather" class="armorSelect" data-type="lightarmored">Armure de Cuir</option><option value="studded" class="armorSelect" data-type="lightarmored">Armure de Cuir Clouté</option><option value="hide" class="armorSelect" data-type="lightarmored">Chemise de Mailles</option></optgroup><optgroup id="mediumArmor" value="Medium Armor" label="Armure Intermédiaire"><option value="chain" class="armorSelect" data-type="mediumarmored">Cotte de Mailles</option><option value="scale" class="armorSelect" data-type="mediumarmored">Armure d Écailles</option><option value="chest" class="armorSelect" data-type="mediumarmored">Plastron</option>></optgroup><optgroup id="heavyArmor" value="Heavy Armor" label="Armure Lourde"><option id="ringmail"  value="ringmail" class="armorSelect" data-type="heavyarmored" disabled>Armure de Mailles</option><option id="splintArmor" value="splint" class="armorSelect" data-type="heavyarmored" disabled>Clibanion</option><option id="plateArmor" value="plate" class="armorSelect" data-type="heavyarmored" disabled>Armure de Plaques</option></optgroup></select></td><td class="align-middle"><input type="number" id="armorNumber" value="0"/></td></tr>').appendTo(armorTable);
        let shields = $('<tr><td><h6> Bouclier Équippé </h6><select id="equippedShield" "><option value="unshielded">Aucun</option><option value="rondache" data-number="1">Rondache</option><option value="ecu" data-number="2">Écu</option></select></td><td class="align-middle"><input type="number" id="shieldNumber" value="0"/></td></tr>').appendTo(armorTable);
        let armorDext = $('<tr><td><h6> Mod Dextérité </h6></td><td><input type="number" id="armorDext" value="0"></td></tr>').appendTo(armorTable);
        let armorClass = $('<tr><td><h6>Classe d Armure </h6></td><td><input type="number" id="armorClass" value="0"></td></tr>').appendTo(armorTable);

        //Jet de Sauvegarde
        let saveRoll = $('<div class="saveRoll col-6"/>').appendTo(armorSave);
        let saveRollTitle = $('<h3> Jets de Sauvegarde </h3>').appendTo(saveRoll);
        let vrvTable = $('<table class="vrvTable table"/>').appendTo(saveRoll);
        let vrvTh = $('<th></th><th> Vigueur </th><th> Réflexes </th><th> Volonté </th>').appendTo(vrvTable);
        let caracMod = $('<tr><td>Mod</td><td><input type="number" id="constitSaveMod"/></td><td><input type="number" id="dextSaveMod"/></td><td><input type="number" id="sageSaveMod"/></td></tr>').appendTo(vrvTable);
        let objetMod = $('<tr><td>Objet</td><td><input type="number" id="objConstitSaveMod"/></td><td><input type="number" id="objDextSaveMod"/></td><td><input type="number" id="objSageSaveMod"/></td></tr>').appendTo(vrvTable);
*/
        //section Tableau Competences
        let skillsDiv = $('<div class="tab-pane fade" id="pills-skill" role="tabpanel" aria-labelledby="pills-skill-tab"/>').appendTo(this.tabs);
        let skillTable = $(' <table class="skillsTab" style="max-width:800px;"/>').appendTo(skillsDiv);
        let skillTitle = $('<h1>COMPÉTENCES</h1>').appendTo(skillTable);
        let proficiencyBonusLbl = $("<label for='Bonus de Competence' class='bonusLbl'>Bonus de Compétences : </label>").appendTo(skillTable);
        let proficiencyBonusInpt = $("<input type='number' class='bonusInpt' value='2'/>").appendTo(proficiencyBonusLbl);
        let bonusPro = parseInt($('.bonusInpt').attr('value'));

        let acrobatSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="acro-Prof"></td><td> Acrobaties: </td><td><input type="number" class="skillNum" id="acroScore" ></td></tr> ').appendTo(skillTable);
        let aracaneSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="arca-Prof"></td><td> Arcane: </td><td><input type="number" class="skillNum" id="arcaScore" ></td></tr> ').appendTo(skillTable);
        let artisanatSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="arti-Prof"></td><td> Artisanat: </td><td><input type="number" class="skillNum" id="artiScore" ></td></tr> ').appendTo(skillTable);
        let athletismSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="athle-Prof"></td><td> Athlétisme: </td><td><input type="number" class="skillNum" id="athleScore" ></td></tr> ').appendTo(skillTable);
        let diploSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="diplo-Prof"></td><td> Diplomatie: </td><td><input type="number" class="skillNum" id="diploScore" ></td></tr> ').appendTo(skillTable);
        let discretSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="discret-Prof"></td><td> Discrétion: </td><td><input type="number" class="skillNum" id="discretScore" ></td></tr> ').appendTo(skillTable);
        let intimidSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="intim-Prof"></td><td> Intimidation: </td><td><input type="number" class="skillNum" id="intimScore" ></td></tr> ').appendTo(skillTable);
        let medecineSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="med-Prof"></td><td> Médecine: </td><td><input type="number" class="skillNum" id="medScore" ></td></tr> ').appendTo(skillTable);
        let natureSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="nat-Prof"></td><td> Nature: </td><td><input type="number" class="skillNum" id="natScore" ></td></tr> ').appendTo(skillTable);
        let occultSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="occult-Prof"></td><td> Occulte: </td><td><input type="number" class="skillNum" id="occultScore" ></td></tr> ').appendTo(skillTable);
        let volSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="vol-Prof"></td><td> Vol à la tire: </td><td><input type="number" class="skillNum" id="volScore" ></td></tr> ').appendTo(skillTable);
        let religSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="relig-Prof"></td><td> Religion: </td><td><input type="number" class="skillNum" id="religScore" ></td></tr> ').appendTo(skillTable);
        let representationSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="represent-Prof"></td><td> Représentation: </td><td><input type="number" class="skillNum" id="representScore" ></td></tr> ').appendTo(skillTable);
        let savoirSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="savoir-Prof"></td><td> Savoir: </td><td><input type="number" class="skillNum" id="savoirScore" ></td></tr> ').appendTo(skillTable);
        let societeSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="societe-Prof"></td><td> Société: </td><td><input type="number" class="skillNum" id="societeScore" ></td></tr> ').appendTo(skillTable);
        let survieSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="survie-Prof"></td><td> Survie: </td><td><input type="number" class="skillNum" id="survieScore" ></td></tr> ').appendTo(skillTable);
        let tromperieSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="trmperie-Prof"></td><td> Tromperie: </td><td><input type="number" class="skillNum" id="trmperieScore" ></td></tr> ').appendTo(skillTable);

        $('.characLvlInpt').change(function() {
            let characterLevel = $('.characLvlInpt').val();
            if (characterLevel >= 17) {
                $('.bonusInpt').attr('value', 6);
            } else if (characterLevel >= 13) {
                $('.bonusInpt').attr('value', 5);
            } else if (characterLevel >= 9) {
                $('.bonusInpt').attr('value', 4);
            } else if (characterLevel >= 5) {
                $('.bonusInpt').attr('value', 3);
            } else {
                $('.bonusInpt').attr('value', 2);
            }
        })

        let forceModInt = 0;
        let dextModInt = 0;
        let constitModInt = 0;
        let intelModInt = 0;
        let sageModInt = 0;
        let charismModInt = 0;

        $('#forceScore').change(function() {
            forceModInt = Math.trunc(Math.floor($("#forceScore").val() - 10) / 2);
            let forceScoreInt = parseInt($('#forceScore').val());
            $('#forceMod').attr('value', forceModInt);
            $('#athleScore').attr('value', forceModInt);
            if (forceScoreInt <= 12) {
                $("#plateArmor").prop("disabled", true);
                $("#splintArmor").prop("disabled", true);
                $("#ringmail").prop("disabled", true);
            } else if (forceScoreInt > 12) {
                $("#plateArmor").prop("disabled", true);
                $("#splintArmor").prop("disabled", true);
                $("#ringmail").prop("disabled", false);
                if (forceScoreInt > 14) {
                    $("#plateArmor").prop("disabled", false);
                    $("#splintArmor").prop("disabled", false);
                    $("#ringmail").prop("disabled", false);
                }
            }
        })

        $('#dextScore').change(function() {
            dextModInt = Math.trunc(Math.floor($("#dextScore").val() - 10) / 2);
            $('#dextMod').attr('value', dextModInt);
            $('#acroScore').attr('value', dextModInt);
            $('#discretScore').attr('value', dextModInt);
            $('#volScore').attr('value', dextModInt);
            $('#dextSaveMod').attr('value', dextModInt);
            $('#armorDext').attr('value', dextModInt)
        })

        $("#equippedArmor").change(function() {
            let selectedArmor = $("#equippedArmor").val();
            let armorBonus = 0;
            if (selectedArmor == 'padded' || selectedArmor == 'leather') {
                armorBonus = 1
            } else if (selectedArmor == 'studded') {
                armorBonus = 2
            } else if (selectedArmor == 'hide') {
                armorBonus = 2;
            } else if (selectedArmor == 'chain') {
                armorBonus = 3
            } else if (selectedArmor == 'scale' || selectedArmor == 'chest') {
                armorBonus = 4;
            } else if (selectedArmor == 'ringmail') {
                armorBonus = 4;
            } else if (selectedArmor == 'splint') {
                armorBonus = 7;
            } else if (selectedArmor == 'plate') {
                armorBonus = 8;
            } else {
                armorBonus = 0;
            }
            $('#armorNumber').attr('value', armorBonus)
        });

        $("#equippedShield").change(function() {
            let shieldBonus = 0;
            let selectedShield = $('#equippedShield').val();
            if (selectedShield == 'rondache') {
                shieldBonus = 1;
            } else if (selectedShield == 'ecu') {
                shieldBonus = 2;
            } else {
                shieldBonus = 0;
            }
            $('#shieldNumber').attr('value', shieldBonus)
        });

        $('#dextScore, #equippedArmor, #equippedShield').change(function() {
            let armorD = parseInt($('#armorDext').attr('value'));
            let armorB = parseInt($('#armorNumber').attr('value'));
            let shieldB = parseInt($('#shieldNumber').attr('value'));
            let armorDextType = 'unarmored';
            let finalDext = armorD;
            let armorType = $('#equippedArmor').find(':selected').data('type');
            if (armorType == 'mediumarmored') {
                armorDextType = 'medium';
                if (armorD > 2) {
                    finalDext = 2;
                } else {
                    finalDext = armorD
                }
            } else if (armorType == 'heavyarmored') {
                armorDextType = 'heavy';
                finalDext = 0;
            } else {
                armorDextType = 'unarmored';
            }
            $('#armorDext').attr('value', finalDext);
            $('#armorClass').attr('value', 10 + finalDext + armorB + shieldB)
        })

        $('#constitScore').change(function() {
            constitModInt = Math.trunc(Math.floor($("#constitScore").val() - 10) / 2);
            $('#constitMod').attr('value', constitModInt);
            $('#constitSaveMod').attr('value', constitModInt);
        });

        $('#intelScore').change(function() {
            intelModInt = Math.trunc(Math.floor($("#intelScore").val() - 10) / 2);
            $('#intelMod').attr('value', intelModInt);
            $('#arcaScore').attr('value', intelModInt);
            $('#artiScore').attr('value', intelModInt);
            $('#occultScore').attr('value', intelModInt);
            $('#savoirScore').attr('value', intelModInt);
            $('#societeScore').attr('value', intelModInt);
        });

        $('#sageScore').change(function() {
            sageModInt = Math.trunc(Math.floor($("#sageScore").val() - 10) / 2);
            $('#sageMod').attr('value', sageModInt);
            $('#medScore').attr('value', sageModInt);
            $('#natScore').attr('value', sageModInt);
            $('#religScore').attr('value', sageModInt);
            $('#survieScore').attr('value', sageModInt);
            $('#sageSaveMod').attr('value', sageModInt);
        });

        $('#charismScore').change(function() {

            charismModInt = Math.trunc(Math.floor($("#charismScore").val() - 10) / 2);
            $('#charismMod').attr('value', charismModInt);
            $('#diploScore').attr('value', charismModInt);
            $('#intimScore').attr('value', charismModInt);
            $('#representScore').attr('value', charismModInt);
            $('#trmperieScore').attr('value', charismModInt);
        });


        $('.skillsTab').change(function() {
            let forceMod = parseInt($('#forceMod').attr('value'));
            let constitMod = parseInt($('#constitMod').attr('value'))
            let dextMod = parseInt($('#dextMod').attr('value'));
            let intelMod = parseInt($('#intelMod').attr('value'));
            let sageMod = parseInt($('#sageMod').attr('value'));
            let charismMod = parseInt($('#charismMod').attr('value'));

            //Competences Dexterite
            if ($('#acro-Prof').is(':checked')) {
                $('#acroScore').attr('value', dextMod + bonusPro);
            } else {
                $('#acroScore').attr('value', dextMod);
            }

            if ($('#discret-Prof').is(':checked')) {
                $('#discretScore').attr('value', dextMod + bonusPro);
            } else {
                $('#discretScore').attr('value', dextMod);
            }

            if ($('#vol-Prof').is(':checked')) {
                $('#volScore').attr('value', dextMod + bonusPro);
            } else {
                $('#volScore').attr('value', dextMod);
            }
            //Competences Intelligence
            if ($('#arca-Prof').is(':checked')) {
                $('#arcaScore').attr('value', intelMod + bonusPro);
            } else {
                $('#arcaScore').attr('value', intelMod);
            }

            if ($('#arti-Prof').is(':checked')) {
                $('#artiScore').attr('value', intelMod + bonusPro);
            } else {
                $('#artiScore').attr('value', intelMod);
            }

            if ($('#occult-Prof').is(':checked')) {
                $('#occultScore').attr('value', intelMod + bonusPro);
            } else {
                $('#occultScore').attr('value', intelMod);
            }

            if ($('#savoir-Prof').is(':checked')) {
                $('#savoirScore').attr('value', intelMod + bonusPro);
            } else {
                $('#savoirScore').attr('value', intelMod);
            }


            if ($('#societe-Prof').is(':checked')) {
                $('#societeScore').attr('value', intelMod + bonusPro);
            } else {
                $('#societeScore').attr('value', intelMod);
            }
            //Competence Force
            if ($('#athle-Prof').is(':checked')) {
                $('#athleScore').attr('value', forceMod + bonusPro);
            } else {
                $('#athleScore').attr('value', forceMod);
            }
            //Competences Charisme
            if ($('#diplo-Prof').is(':checked')) {
                $('#diploScore').attr('value', charismMod + bonusPro);
            } else {
                $('#diploScore').attr('value', charismMod);
            }

            if ($('#intim-Prof').is(':checked')) {
                $('#intimScore').attr('value', charismMod + bonusPro);
            } else {
                $('#intimScore').attr('value', charismMod);
            }

            if ($('#represent-Prof').is(':checked')) {
                $('#representScore').attr('value', charismMod + bonusPro);
            } else {
                $('#representScore').attr('value', charismMod);
            }

            if ($('#trmperie-Prof').is(':checked')) {
                $('#trmperieScore').attr('value', charismMod + bonusPro);
            } else {
                $('#trmperieScore').attr('value', charismMod);
            }
            //Competence Sagesse
            if ($('#med-Prof').is(':checked')) {
                $('#medScore').attr('value', sageMod + bonusPro);
            } else {
                $('#medScore').attr('value', sageMod);
            }

            if ($('#nat-Prof').is(':checked')) {
                $('#natScore').attr('value', sageMod + bonusPro);
            } else {
                $('#natScore').attr('value', sageMod);
            }


            if ($('#relig-Prof').is(':checked')) {
                $('#religScore').attr('value', sageMod + bonusPro);
            } else {
                $('#religScore').attr('value', sageMod);
            }

            if ($('#survie-Prof').is(':checked')) {
                $('#survieScore').attr('value', sageMod + bonusPro);
            } else {
                $('#survieScore').attr('value', sageMod);
            }
        });
    }
}