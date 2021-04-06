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


        //Premiere ligne nom du perso/race/level
        this.tabs = $('<div class="tab-content" id="pills-tabContent"/>').appendTo(this.element);
        let caracDiv = $(' <div class="tab-pane fade show active" id="pills-carac" role="tabpanel" aria-labelledby="pills-carac-tab"/>').appendTo(this.tabs);
        let caracTable = $(' <table class="table caption-top caracTable" style="max-width:800px;"/>').appendTo(caracDiv);
        let caracTitle = $(' <caption><h1> CARACTÉRISTIQUE </h1> </caption>').appendTo(caracTable);
        let caracTableBody = $('<tbody/>').appendTo(caracTable);
        let characFirstRow = $("<tr><th scope='row'><th></tr>").appendTo(caracTableBody);

        let nameOfCharacLbl = $('<td><label for="name" class="col label characName">Nom du Perso</label></td>').appendTo(characFirstRow);
        let nameOfCharacInpt = $('<td><input type="text" class="input characName"/></td>').appendTo(characFirstRow);
        let race = $('<td><label for="race"> Race : </label></br><select name="race" id="race"> <option value = " " ></option><option value = "Humain" > Humain </option > <option value = "Elfe" > Elfe </option> <option value = "Nain" > Nain </option > <option value = "Gnome" > Gnome </option> <option value = "Halfelin" > Halfelin </option > <option value = "Demi-Elfe" > Demi-Elfe </option> <option value = "Demi-Orc" > Demi-Orc </option > </select></td>').appendTo(characFirstRow);
        let characLevelLbl = $("<td><label for='niveau' class='characLvlLbl'>Niveau du Personnage : </label></td>").appendTo(characFirstRow);
        let characLevelInpt = $("<td><input type='number' class='characLvlInpt' value='1' /></td>").appendTo(characFirstRow);

        //deuxieme ligne classes
        let characSecondRow = $("<tr><th scope='row'><th></tr>").appendTo(caracTableBody);
        let class1OfCharac = $('<td><label for="classe1">Classe </label><br/><select name="classe1" id="classe1"><option value = " " > < /option> <option value = "Barbare" > Barbare < /option> <option value = "Barde" > Barde < /option> <option value = "Druide" > Druide < /option> <option value = "Ensorceleur" > Ensorceleur < /option> <option value = "Guerrier" > Guerrier < /option> <option value = "Magicien" > Magicien < /option> <option value = "Moine" > Moine < /option> <option value = "Paladin" > Paladin </option> <option value = "Prêtre"> Prêtre </option> <option value = "Rodeur"> Rodeur </option> <option value ="Roublard"> Roublard </option></select > < /td > ').appendTo(characSecondRow);
        let class2OfCharac = $('<td><label for="classe2">Classe 2</label><br/><select name="classe_2" id="classe2"><option value = " " >  </option><option value = "Barbare" > Barbare </option> <option value = "Barde" > Barde </option> <option value = "Druide" > Druide </option> <option value = "Ensorceleur" > Ensorceleur </option> <option value = "Guerrier" > Guerrier </option> <option value = "Magicien" > Magicien </option> <option value = "Moine" > Moine </option><option value = "Paladin" > Paladin </option><option value = "Prêtre" > Prêtre </option><option value = "Rodeur" > Rodeur </option><option value = "Roublard" > Roublard </option></select ></td> ').appendTo(characSecondRow);
        let class3OfCharac = $('<td><label for="classe3">Classe 3</label><br/><select name="classe_3" id="classe3"><option value = " " >  </option><option value = "Barbare" > Barbare </option> <option value = "Barde" > Barde </option> <option value = "Druide" > Druide </option> <option value = "Ensorceleur" > Ensorceleur </option> <option value = "Guerrier" > Guerrier </option> <option value = "Magicien" > Magicien </option> <option value = "Moine" > Moine </option><option value = "Paladin" > Paladin </option><option value = "Prêtre" > Prêtre </option><option value = "Rodeur" > Rodeur </option><option value = "Roublard" > Roublard </option></select ></td> ').appendTo(characSecondRow);
        let rah = $('<div class="row mb-2 justify-content-start rah" />').appendTo(this.tabs);
        //troisieme ligne alignement
        let characThirdRow = $("<tr><th scope='row'><th></tr>").appendTo(caracTableBody);
        let alignement = $('<td><label for="alignement"> Alignement </label><select name="alignement" id="alignement"><option value = " " >  </option><option value = "Loyal Bon" > Loyal Bon </option> <option value = "Loyal Neutre" > Loyal Neutre </option> <option value = "Loyal Mauvais" > Loyal Mauvais </option> <option value = "Neutre Bon" > Neutre Bon </option> <option value = "Neutre" > Neutre </option> <option value = "Neutre Mauvais" > Neutre Mauvais </option> <option value = "Chaotique Bon" > Chaotique Bon </option><option value = "Chaotique Neutre" > Chaotique Neutre </option><option value = "Chaotique Mauvais" > Chaotique Mauvais </option></select ></td> ').appendTo(characThirdRow);



        //section Caracteristique
        this.table = $('<table class="table charac-tb"/>').appendTo(this.tabs);
        let avmTr = $('<tr/>').appendTo(this.table);
        let avmTh = $('<th> Abilité </th><th> Valeur </th><th> Modificateur </th>').appendTo(avmTr);
        let forceTr = $('<tr><td> Force </td><td><input type="number" value="' + this.options.force + '" id="forceScore"></td><td><input type="number " value="' + this.options.modForce + '" id="forceMod"></td></tr>').appendTo(this.table);
        let dextTr = $('<tr><td> Dextérité </td><td><input type="number" value="' + this.options.dexterite + '" id="dextScore"></td><td><input type="number" value="' + this.options.modDexterite + '" id="dextMod"></td></tr>').appendTo(this.table);
        let constitTr = $('<tr><td> Constitution </td><td><input type="number" value="' + this.options.constitution + '" id="constitScore"></td><td><input type="number" value="' + this.options.modConstitution + '" id="constitMod"></td></tr>').appendTo(this.table);
        let intelTr = $('<tr><td> Intelligence </td><td><input type="number" value="' + this.options.intelligence + '" id="intelScore"></td><td><input type="number" value="' + this.options.modIntelligence + '" id="intelMod"></td></tr>').appendTo(this.table);
        let sageTr = $('<tr><td> Sagesse </td><td><input type="number" value="' + this.options.sagesse + '" id="sageScore"></td><td><input type="number" value="' + this.options.modSagesse + '" id="sageMod"></td></tr>').appendTo(this.table);
        let charismTr = $('<tr><td> Charisme </td><td><input type="number" value="' + this.options.charisme + '" id="charismScore"></td><td><input type="number" value="' + this.options.modCharisme + '" id="charismMod"></td></tr>').appendTo(this.table);

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

        //section Les Competences
        let skills = $('<div class="col skill-tab px-5"/>').appendTo(this.element);
        let skilltitle = $('<h3>Compétences</h3>').appendTo(skills);
        let proficiencyBonusLbl = $("<label for='Bonus de Competence' class='bonusLbl'>Bonus de Compétences : </label>").appendTo(skills);
        let proficiencyBonusInpt = $("<input type='number' class='bonusInpt' value='2'/>").appendTo(proficiencyBonusLbl);
        let bonusPro = parseInt($('.bonusInpt').attr('value'));
        let skillTab = $('<table class="skillsTab"/>').appendTo(skills);
        let acrobatSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="acro-Prof"></td><td> Acrobaties: </td><td><input type="number" class="skillNum" id="acroScore" ></td></tr> ').appendTo(skillTab);
        let aracaneSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="arca-Prof"></td><td> Arcane: </td><td><input type="number" class="skillNum" id="arcaScore" ></td></tr> ').appendTo(skillTab);
        let artisanatSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="arti-Prof"></td><td> Artisanat: </td><td><input type="number" class="skillNum" id="artiScore" ></td></tr> ').appendTo(skillTab);
        let athletismSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="athle-Prof"></td><td> Athlétisme: </td><td><input type="number" class="skillNum" id="athleScore" ></td></tr> ').appendTo(skillTab);
        let diploSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="diplo-Prof"></td><td> Diplomatie: </td><td><input type="number" class="skillNum" id="diploScore" ></td></tr> ').appendTo(skillTab);
        let discretSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="discret-Prof"></td><td> Discrétion: </td><td><input type="number" class="skillNum" id="discretScore" ></td></tr> ').appendTo(skillTab);
        let intimidSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="intim-Prof"></td><td> Intimidation: </td><td><input type="number" class="skillNum" id="intimScore" ></td></tr> ').appendTo(skillTab);
        let medecineSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="med-Prof"></td><td> Médecine: </td><td><input type="number" class="skillNum" id="medScore" ></td></tr> ').appendTo(skillTab);
        let natureSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="nat-Prof"></td><td> Nature: </td><td><input type="number" class="skillNum" id="natScore" ></td></tr> ').appendTo(skillTab);
        let occultSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="occult-Prof"></td><td> Occulte: </td><td><input type="number" class="skillNum" id="occultScore" ></td></tr> ').appendTo(skillTab);
        let volSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="vol-Prof"></td><td> Vol à la tire: </td><td><input type="number" class="skillNum" id="volScore" ></td></tr> ').appendTo(skillTab);
        let religSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="relig-Prof"></td><td> Religion: </td><td><input type="number" class="skillNum" id="religScore" ></td></tr> ').appendTo(skillTab);
        let representationSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="represent-Prof"></td><td> Représentation: </td><td><input type="number" class="skillNum" id="representScore" ></td></tr> ').appendTo(skillTab);
        let savoirSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="savoir-Prof"></td><td> Savoir: </td><td><input type="number" class="skillNum" id="savoirScore" ></td></tr> ').appendTo(skillTab);
        let societeSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="societe-Prof"></td><td> Société: </td><td><input type="number" class="skillNum" id="societeScore" ></td></tr> ').appendTo(skillTab);
        let survieSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="survie-Prof"></td><td> Survie: </td><td><input type="number" class="skillNum" id="survieScore" ></td></tr> ').appendTo(skillTab);
        let tromperieSkill = $('<tr><td><input type="checkbox" class="skillCheck" id="trmperie-Prof"></td><td> Tromperie: </td><td><input type="number" class="skillNum" id="trmperieScore" ></td></tr> ').appendTo(skillTab);

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