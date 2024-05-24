$(document).ready(function() {
    // array of grades
    var grades = ['F','E', 'D', 'C', 'B', 'A', 'S'];
    var gradeValues = [7, 14, 21, 28, 35, 42, 49];
    var gradeValues2 = [14, 28, 42, 56, 70, 84, 98];
    var gradeValues3 = [21, 42, 63, 84, 105, 126, 147];
    var gradeValues4 = [28, 56, 84, 112, 140, 168, 196];
    var gradeValues5 = [35, 70, 105, 140, 175, 210, 245];
    var gradeValues6 = [56, 112, 168, 224, 280, 336, 392];
    var gradeValues7 = [70, 140, 210, 280, 350, 420, 490];
    var AOValues = [21, 21, 21, 21, 21, 21, 21];
    var NoValues = [0, 0, 0, 0, 0, 0, 0];
    var Values7 = [7, 7, 7, 7, 7, 7, 7];
    
    var equipmentTypes = [
        { name: 'Melee', statDependency: 'Strength' },
        { name: 'Ranged', statDependency: 'Precision' },
        { name: 'Catalyst', statDependency: 'Intelligence' },
        { name: 'Light armor', statDependency: 'Speed'},
        { name: 'Heavy armor', statDependency: 'Vitality'}
    ];

    var skillTypes = [
        { name: '<----------------------Movement---------------------->', statDependency: ' ', gradeValues: gradeValues },
        { name: 'Fast', statDependency: 'Speed', gradeValues: gradeValues },
        { name: 'Flight', statDependency: 'Precision', gradeValues: gradeValues3 },
        { name: 'Jumping', statDependency: 'Strength', gradeValues: gradeValues },
        { name: 'Portal', statDependency: 'Intelligence', gradeValues: gradeValues5 },
        { name: 'Special Movement', statDependency: 'Precision', gradeValues: gradeValues },
        { name: 'Swim Speed', statDependency: 'Speed', gradeValues: gradeValues },
        { name: 'Teleport', statDependency: 'Intelligence', gradeValues: gradeValues3 },
        { name: 'Tunneling', statDependency: 'Strength', gradeValues: gradeValues },
        { name: '<----------------------Mental---------------------->', statDependency: ' ', gradeValues: gradeValues },
        { name: 'Composed', statDependency: 'ChGrade', gradeValues: gradeValues },
        { name: 'Mind Shield', statDependency: 'Intelligence', gradeValues: gradeValues },
        { name: 'Postcognition', statDependency: 'Intelligence', gradeValues: gradeValues2 },
        { name: 'Precognition', statDependency: 'Intelligence', gradeValues: gradeValues2 },
        { name: 'Mind Control', statDependency: 'Intelligence', gradeValues: gradeValues3 },
        { name: 'Telekinesis', statDependency: 'Intelligence', gradeValues: gradeValues4 },
        { name: 'Telepathy', statDependency: 'Intelligence', gradeValues: gradeValues3 },
        { name: '<----------------------Martial---------------------->', statDependency: ' ', gradeValues: gradeValues },
        { name: 'Fighting Style Melee [Specialized]', statDependency: 'Strength', gradeValues: gradeValues },
        { name: 'Fighting Style Melee', statDependency: 'Strength', gradeValues: gradeValues },
        { name: 'Fighting Style Ranged [Specialized]', statDependency: 'Precision', gradeValues: gradeValues },
        { name: 'Fighting Style Ranged', statDependency: 'Precision', gradeValues: gradeValues },
        { name: 'Steady Hands', statDependency: 'Precision', gradeValues: gradeValues },
        { name: 'Superstrength', statDependency: 'Strength', gradeValues: gradeValues2 },
        { name: '<----------------------Magic---------------------->', statDependency: ' ', gradeValues: gradeValues },
        { name: 'Type Affinity 7 cost', statDependency: 'Intelligence', gradeValues: gradeValues },
        { name: 'Type Affinity 14 cost', statDependency: 'Intelligence', gradeValues: gradeValues2 },
        { name: 'Componentless Magic', statDependency: 'Magic', gradeValues: gradeValues3 },
        { name: 'Control Environment', statDependency: 'Intelligence', gradeValues: gradeValues },
        { name: 'Energized', statDependency: 'Intelligence', gradeValues: gradeValues },
        { name: 'Illusion', statDependency: 'Intelligence', gradeValues: gradeValues3 },
        { name: 'Magic', statDependency: 'Intelligence', gradeValues: gradeValues },
        { name: 'Magic Area of Effect', statDependency: 'Magic', gradeValues: gradeValues },
        { name: 'Magic Range', statDependency: 'Magic', gradeValues: gradeValues },
        { name: 'Magic Targets', statDependency: 'Magic', gradeValues: gradeValues },
        { name: 'Raise Undead', statDependency: 'Intelligence', gradeValues: gradeValues3 },
        { name: 'Selective Magic', statDependency: 'Magic', gradeValues: gradeValues },
        { name: 'Spell Duration', statDependency: 'Magic', gradeValues: gradeValues },
        { name: 'Summon Creature', statDependency: 'Intelligence', gradeValues: gradeValues6 },
        { name: 'Transformation', statDependency: 'Vitality', gradeValues: gradeValues4 },
        { name: 'Transmutation', statDependency: 'Intelligence', gradeValues: gradeValues5 },
        { name: '<----------------------Sense---------------------->', statDependency: ' ', gradeValues: gradeValues },
        { name: 'Appraisal (Isekai)', statDependency: 'ChGrade', gradeValues: NoValues },
        { name: 'Appraisal (Native)', statDependency: 'ChGrade', gradeValues: gradeValues },
        { name: "Heightened Sense", statDependency: "Intelligence", gradeValues: gradeValues },
        { name: "Sixth Sense", statDependency: "Intelligence", gradeValues: gradeValues },
        { name: "Supersense", statDependency: "Intelligence", gradeValues: gradeValues },
        { name: '<----------------------Defensive---------------------->', statDependency: ' ', gradeValues: gradeValues },
        { name: 'Always Outnumbered', statDependency: 'ChGrade', gradeValues: AOValues },
        { name: "Barrier", statDependency: "Vitality", gradeValues: gradeValues2 },
        { name: "Change State", statDependency: "Vitality", gradeValues: gradeValues3 },
        { name: "Duration Reduction", statDependency: "Vitality", gradeValues: gradeValues },
        { name: "Healing", statDependency: "Intelligence", gradeValues: gradeValues },
        { name: "Regeneration", statDependency: "ChGrade", gradeValues: gradeValues },
        { name: "Resilient", statDependency: "Vitality", gradeValues: gradeValues },
        { name: "Resistance", statDependency: "Vitality", gradeValues: gradeValues },
        { name: "Resistance [Physical]", statDependency: "Vitality", gradeValues: gradeValues3 },
        { name: "Resistance [Magical]", statDependency: "Vitality", gradeValues: gradeValues7 },
        { name: "Undetected", statDependency: "Precision", gradeValues: gradeValues2 },
        { name: '<----------------------Misc---------------------->', statDependency: ' ', gradeValues: gradeValues },
        { name: "Alternate Identity", statDependency: 'Vitality', gradeValues: gradeValues },
        { name: "Attentive Student", statDependency: 'ChGrade', gradeValues: gradeValues },
        { name: "Bane", statDependency: 'ChGrade', gradeValues: gradeValues2 },
        { name: "Bolster", statDependency: "Intelligence", gradeValues: gradeValues },
        { name: "Concealment", statDependency: "Precision", gradeValues: gradeValues },
        { name: "Conversion", statDependency: "Vitality", gradeValues: gradeValues3 },
        { name: "[Martial] Coup", statDependency: "Intelligence", gradeValues: gradeValues7 },
        { name: "[Magical] Coup", statDependency: "Intelligence", gradeValues: gradeValues7 },
        { name: "Devour", statDependency: 'ChGrade', gradeValues: gradeValues },
        { name: 'Educated', statDependency: 'ChGrade', gradeValues: gradeValues },
        { name: "Elasticity", statDependency: "Vitality", gradeValues: gradeValues2 },
        { name: "Essence Eater", statDependency: 'ChGrade', gradeValues: gradeValues4 },
        { name: "Language", statDependency: "Intelligence", gradeValues: gradeValues },
        { name: "Lucky", statDependency: 'ChGrade', gradeValues: gradeValues },
        { name: "Mentor", statDependency: 'ChGrade', gradeValues: gradeValues },
        { name: "Mimic", statDependency: "Intelligence", gradeValues: gradeValues },
        { name: "Minions", statDependency: 'ChGrade', gradeValues: gradeValues4 },
        { name: "Narrative Booster", statDependency: 'ChGrade', gradeValues: gradeValues2 },
        { name: "Nullify", statDependency: "Intelligence", gradeValues: gradeValues5 },
        { name: "Pocket Dimension", statDependency: "Intelligence", gradeValues: gradeValues2 },
        { name: "Size Change", statDependency: "Vitality", gradeValues: gradeValues5 },
        { name: "Skill Loan", statDependency: "Vitality", gradeValues: gradeValues3 },
        { name: "Tamer", statDependency: 'ChGrade', gradeValues: gradeValues },
        { name: "Tamer Breeding", statDependency: 'ChGrade', gradeValues: gradeValues },
        { name: "Tamer Buddy Awakening", statDependency: 'ChGrade', gradeValues: gradeValues },
        { name: "Tamer Buddy Maintenance", statDependency: 'ChGrade', gradeValues: gradeValues },
        { name: "Tamer Element Training", statDependency: 'ChGrade', gradeValues: gradeValues },
        { name: "Tamer Merging", statDependency: 'ChGrade', gradeValues: gradeValues },
        { name: "Tamer Skill Training", statDependency: 'ChGrade', gradeValues: gradeValues },
        { name: "Tamer Stat Training", statDependency: 'ChGrade', gradeValues: gradeValues },
        { name: "Villainous", statDependency: 'ChGrade', gradeValues: AOValues },
        { name: "Weaken Str", statDependency: "Strength", gradeValues: gradeValues},
        { name: "Weaken Pre", statDependency: "Precision", gradeValues: gradeValues},
        { name: "Weaken Int", statDependency: "Intelligence", gradeValues: gradeValues},
        { name: "Weaken Vit", statDependency: "Vitality", gradeValues: gradeValues},
        { name: "Weaken Spd", statDependency: "Speed", gradeValues: gradeValues},
        { name: "Wealth", statDependency: 'ChGrade', gradeValues: gradeValues3 },
        { name: '<----------------------Secondary---------------------->', statDependency: ' ', gradeValues: gradeValues },
        {name: "Academia", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Acrobatics", statDependency: "Precision", gradeValues: gradeValues},
        {name: "Agriculture", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Alchemy", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Animal Handling", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Arcana", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Architecture", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Area Knowledge", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Artisan", statDependency: "Precision", gradeValues: gradeValues},
        {name: "Athletics", statDependency: "Strength", gradeValues: gradeValues},
        {name: "Builder", statDependency: "ChGrade", gradeValues: gradeValues},
        {name: "Business", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Climbing", statDependency: "Strength", gradeValues: gradeValues},
        {name: "Controlled Breathing", statDependency: "Vitality", gradeValues: gradeValues},
        {name: "Culture", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Deception", statDependency: "ChGrade", gradeValues: gradeValues},
        {name: "Disguise", statDependency: "ChGrade", gradeValues: gradeValues},
        {name: "Domestic Arts", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Empathy", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Engineering", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Etiquette", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Focus", statDependency: "ChGrade", gradeValues: gradeValues},
        {name: "Forgery", statDependency: "Precision", gradeValues: gradeValues},
        {name: "Gaming", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Harvester", statDependency: "ChGrade", gradeValues: gradeValues},
        {name: "Helming", statDependency: "Precision", gradeValues: gradeValues},
        {name: "History", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Infuser", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Insight", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Interrogation", statDependency: "ChGrade", gradeValues: gradeValues},
        {name: "Intimidation", statDependency: "ChGrade", gradeValues: gradeValues},
        {name: "Investigation", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Law", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Leadership", statDependency: "ChGrade", gradeValues: gradeValues},
        {name: "Maker Str", statDependency: "Strength", gradeValues: gradeValues},
        {name: "Maker Pre", statDependency: "Precision", gradeValues: gradeValues},
        {name: "Maker Int", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Maker Vit", statDependency: "Vitality", gradeValues: gradeValues},
        {name: "Maker Spd", statDependency: "Speed", gradeValues: gradeValues},
        {name: "Medicine", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Mining", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Nature", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Navigation", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Perception", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Performance", statDependency: "ChGrade", gradeValues: gradeValues},
        {name: "Persuasion", statDependency: "ChGrade", gradeValues: gradeValues},
        {name: "Physics", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Refiner Str", statDependency: "Strength", gradeValues: gradeValues},
        {name: "Refiner Pre", statDependency: "Precision", gradeValues: gradeValues},
        {name: "Refiner Int", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Refiner Vit", statDependency: "Vitality", gradeValues: gradeValues},
        {name: "Refiner Spd", statDependency: "Speed", gradeValues: gradeValues},
        {name: "Religion", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Riding", statDependency: "Precision", gradeValues: gradeValues},
        {name: "Seduction", statDependency: "ChGrade", gradeValues: gradeValues},
        {name: "Sleight of Hand", statDependency: "Precision", gradeValues: gradeValues},
        {name: "Stealth", statDependency: "Precision", gradeValues: gradeValues},
        {name: "Street Sense", statDependency: "ChGrade", gradeValues: gradeValues},
        {name: "Survival", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Swimming", statDependency: "Vitality", gradeValues: gradeValues},
        {name: "Traps", statDependency: "Precision", gradeValues: gradeValues},
        {name: "Visual Arts", statDependency: "Intelligence", gradeValues: gradeValues},
        {name: "Warfare", statDependency: "Intelligence", gradeValues: gradeValues}
    ];
    //this is for specialized
    var techniqueCosts = {
        "Accurate": 21,
        "Area": 21,
        "Aura": 21,
        "Blight": 21,
        "Blind Fighter": 7,
        "Blind Ranged Fighting": 7,
        "Contact": 21,
        "Contagion": 21,
        "Continuing": 21,
        "Deflect": 21,
        "Drain": 21,
        "Enervation": 21,
        "Flare": 21,
        "Flexible": 21,
        "Homing": 21,
        "Hot Shot": 35,
        "Incapacitating": 35,
        "Incurable": 21,
        "Indirect": 21,
        "Irritant": 21,
        "Knockback": 21,
        "Linked": 21,
        "Vorpal": 35,
        "Non-Lethal": 21,
        "Penetrating": 21,
        "Quake": 21,
        "Range": 21,
        "Reach": 7,
        "Reflect": 35,
        "Selective": 21,
        "Spreading": 21,
        "Tangle": 21,
        "Trap": 21,
        "Vampiric": 35     
    };
    //this is for normal fighting style
    var techniqueCosts2 = {
        "Accurate": gradeValues,
        "Area": gradeValues,
        "Aura": gradeValues,
        "Blight": gradeValues,
        "Blind Fighter": Values7,
        "Blind Ranged Fighting": Values7,
        "Contact": gradeValues,
        "Contagion": gradeValues,
        "Continuing": gradeValues,
        "Deflect": gradeValues,
        "Drain": gradeValues,
        "Enervation": gradeValues,
        "Flare": gradeValues,
        "Flexible": gradeValues,
        "Homing": gradeValues,
        "Hot Shot": gradeValues2,
        "Incapacitating": gradeValues2,
        "Incurable": gradeValues,
        "Indirect": gradeValues,
        "Irritant": gradeValues,
        "Knockback": gradeValues,
        "Linked": gradeValues,
        "Vorpal": gradeValues2,
        "Non-Lethal": gradeValues,
        "Penetrating": gradeValues,
        "Quake": gradeValues,
        "Range": gradeValues,
        "Reach": Values7,
        "Reflect": gradeValues2,
        "Selective": gradeValues,
        "Spreading": gradeValues,
        "Tangle": gradeValues,
        "Trap": gradeValues,
        "Vampiric": gradeValues2        
    };

    $('.stat-grade').change(function() {
        var changedStat = $(this).attr('id');
        calculateCharacterGrade();
        removeDependentEquipment(changedStat);
        removeDependentSkills(changedStat);
        removeFightingStyleHeaders();
        updateEquipmentOptions();
        updateSkillOptions();
    });

    // Enable/disable companion grade dropdown based on companion checkbox state
    $('#companion').change(function() {
        if ($(this).is(':checked')) {
            $('#companion-grade').prop('disabled', false);
        } else {
            $('#companion-grade').prop('disabled', true);
            $('#companion-grade').val('-35'); // Reset to F grade if unchecked
        }
        calculatePoints();
    });

    $('.add-technique').click(function() {
        calculatePoints();
    });

    $('.remove-technique').click(function() {
        $(this).parent().remove();
        calculatePoints();
    });

    $('#born-for-this, #cashback, #companion, #companion-grade, #minion').change(function() {
        calculatePoints();
    });

    // listeners for when select options or earned points are changed
    $('.stat-grade, #earned-points').change(function() {
        calculatePoints();
    });

    // add skill
    $('#add-skill').click(function() {
        var selectedSkill = $('#skill-select').val();
        var skillType = skillTypes.find(s => s.name === selectedSkill);

        var pointCost2 = skillType.gradeValues[0]; // Use the first value in gradeValues
        var relevantStatValue2 = $('#' + skillType.statDependency.toLowerCase()).val();

        var skillRow = $('<div class="skill-row" data-stat-dependency="' + skillType.statDependency + '"><span>' + selectedSkill + '</span><select class="skill-grade"></select><span class="skill-cost">' + pointCost2 + '</span><button class="remove-button">&times;</button></div>');
        $('#skill-list').append(skillRow);
        var $gradeDropdown2 = skillRow.find('.skill-grade');
        
        populateGrades3($gradeDropdown2, relevantStatValue2, skillType.gradeValues, selectedSkill);

        // Add change event to the grade dropdown 
        $gradeDropdown2.change(function() {
            var selectedGradeIndex2 = $(this).prop('selectedIndex');
            var newPointCost2 = skillType.gradeValues[selectedGradeIndex2];
            $(this).siblings('.skill-cost').text(newPointCost2);

            //track magic grade
            if (selectedSkill === 'Magic') {
                $('#magic').val(gradeValues[selectedGradeIndex2-1]);
                updateSkillOptions();
                removeMagicSkills();
            } else if (selectedSkill === 'Fighting Style Ranged' || selectedSkill === 'Fighting Style Melee' || selectedSkill === 'Fighting Style Ranged [Specialized]' || selectedSkill === 'Fighting Style Melee [Specialized]') {
                removeFightingStyleTechniques();
            }

            calculatePoints();
        });
        
        if (selectedSkill === 'Fighting Style Melee [Specialized]' || selectedSkill === 'Fighting Style Ranged [Specialized]') {
            addFightingStyleHeader();
        }

        if (selectedSkill === 'Fighting Style Melee' || selectedSkill === 'Fighting Style Ranged') {
            addFightingStyleHeader2();
        }

        // Add click event to the remove button
        skillRow.find('.remove-button').click(function() {
            if (selectedSkill === 'Magic') {
                $('#magic').val(0);
                updateSkillOptions();
                removeMagicSkills();
            } else if (selectedSkill === 'Fighting Style Melee [Specialized]' || selectedSkill === 'Fighting Style Ranged [Specialized]' || selectedSkill === 'Fighting Style Melee' || selectedSkill === 'Fighting Style Ranged') {
                removeFightingStyleHeaders();
            }

            $(this).parent().remove();
            calculatePoints();
        });


        calculatePoints();
    });

    // add equipment
    $('#add-equipment').click(function() {
        var selectedEquipment = $('#equipment-select').val();
        var pointCost = gradeValues[0];
        var equipmentType = equipmentTypes.find(e => e.name === selectedEquipment);
        var relevantStatValue = $('#' + equipmentType.statDependency.toLowerCase()).val();

        var equipmentRow = $('<div class="equipment-row" data-stat-dependency="' + equipmentType.statDependency + '"><span>' + selectedEquipment + '</span><span>(' + equipmentType.statDependency + ')</span><select class="equipment-grade"></select><span class="equipment-cost">' + pointCost + '</span><label><input type="checkbox" class="equipment-option" value="natural"> Natural weapon</label><label><input type="checkbox" class="equipment-option" value="mythril"> Mythril</label><label><input type="checkbox" class="equipment-option" value="orichalcum"> Orichalcum</label><button class="remove-button">&times;</button></div>');
        $('#equipment-list').append(equipmentRow);
        var $gradeDropdown = equipmentRow.find('.equipment-grade');
        
        populateGrades2($gradeDropdown, relevantStatValue);

        // Add change event to the grade dropdown 
        $gradeDropdown.change(function() {
            var selectedGradeIndex = $(this).prop('selectedIndex');
            var newPointCost = gradeValues[selectedGradeIndex];
            $(this).siblings('.equipment-cost').text(newPointCost);
            calculatePoints();
        });

        // Add click event to the checkboxes
        equipmentRow.find('.equipment-option').change(function() {
            updateEquipmentCost($(this).closest('.equipment-row'));
            calculatePoints();
        });

        // Add click event to the remove button
        equipmentRow.find('.remove-button').click(function() {
            $(this).parent().remove();
            calculatePoints();
        });

        calculatePoints();
    });

    // add custom
    $('#add-custom').click(function() {
        var customRow = $('<div class="custom-row"><input type="text" class="custom"><select class="custom-grade"></select><input type="number" class="custom-price"><button class="remove-button">&times;</button></div>');
        $('#custom').append(customRow);

        populateGrades(customRow.find('.custom-grade'));

        // Add change event to the grade dropdown and price input
        customRow.find('.custom-price').change(function() {
            updateCustomCost(customRow);
            calculatePoints();
        });

        // Add click event to the remove button
        customRow.find('.remove-button').click(function() {
            $(this).parent().remove();
            calculatePoints();
        });

        calculatePoints();
    });


    function removeDependentSkills(changedStat) {
        $('.skill-row').each(function() {
            var statDependency = $(this).data('stat-dependency');
            if (statDependency.toLowerCase() === changedStat || statDependency.toLowerCase() === 'chgrade' || statDependency.toLowerCase() === 'magic') {
                $(this).remove();
            }
        });
    }

    function removeDependentEquipment(changedStat) {
        $('.equipment-row').each(function() {
            var statDependency = $(this).data('stat-dependency');
            if (statDependency.toLowerCase() === changedStat) {
                $(this).remove();
            }
        });
    }


    function updateCustomCost(customRow) {
        var customPrice = parseInt(customRow.find('.custom-price').val()) || 0;

        // Use the custom price as the cost
        customRow.find('.custom-price').val(customPrice);
    }
    

    // Function to update equipment options based on stat dependencies
    function updateEquipmentOptions() {
        var strength = $('#strength').val();
        var precision = $('#precision').val();
        var intelligence = $('#intelligence').val();
        var vitality = $('#vitality').val();
        var speed = $('#speed').val();
    
        var $equipmentSelect = $('#equipment-select');
        $equipmentSelect.empty(); // Clear existing options
    
        for (var i = 0; i < equipmentTypes.length; i++) {
                var statDependency = equipmentTypes[i].statDependency;
                var shouldDisplay = false;
    
        if (statDependency === 'Strength' && strength >= 7) {
                shouldDisplay = true;
            } else if (statDependency === 'Precision' && precision >= 7) {
                shouldDisplay = true;
            } else if (statDependency === 'Intelligence' && intelligence >= 7) {
                shouldDisplay = true;
            } else if (statDependency === 'Speed' && speed >= 7) {
                shouldDisplay = true;
            } else if (statDependency === 'Vitality' && vitality >= 7) {
                shouldDisplay = true;
            }
    
            if (shouldDisplay) {
                $equipmentSelect.append('<option value="' + equipmentTypes[i].name + '">' + equipmentTypes[i].name + '</option>');
            }
        }
    }
    function populateGrades(selector) {
        $(selector).each(function() {
            if ($(this).children().length == 0) {
                for (var i = 0; i < grades.length; i++) {
                    $(this).append('<option value="' + gradeValues[i] + '">' + grades[i] + '</option>');
                }
            }
        });
    }

    function populateGrades3(selector, relevantStatValue, customGradeValues, skillName) {
        var relevantStatUpgrades = relevantStatValue / 7;
        $(selector).each(function() {
            if ($(this).children().length == 0) {
                // hard coded for specific exceptions
                if (skillName === 'Flight' || skillName === 'Always Outnumbered') {
                    for (var i = 0; i < relevantStatUpgrades - 2; i++) {
                        $(this).append('<option value="' + customGradeValues[i] + '">' + grades[i] + '</option>');
                    }
                } else if (skillName === 'Attentive Student' || skillName === 'Appraisal (Isekai)' || skillName === 'Appraisal (Native)' || skillName === 'Componentless' || skillName === 'Narrative Booster') {
                    for (var i = 0; i < relevantStatUpgrades + 1; i++) {
                        $(this).append('<option value="' + customGradeValues[i] + '">' + grades[i] + '</option>');
                    }
                } else {
                    for (var i = 0; i < relevantStatUpgrades; i++) {
                        $(this).append('<option value="' + customGradeValues[i] + '">' + grades[i] + '</option>');
                    }
                }
            }
        });
    }

    function populateGrades2(selector, relevantStatValue) {
        var relevantStatUpgrades = relevantStatValue / 7;
        $(selector).each(function() {
            if ($(this).children().length == 0) {
                for (var i = 0; i < relevantStatUpgrades; i++) {
                    $(this).append('<option value="' + gradeValues[i] + '">' + grades[i] + '</option>');
                }
            }
        });
    }

    function addFightingStyleHeader() {
        var $header = $('<div class="fighting-style-header"><input type="text" placeholder="Enter style name"> fighting style (SP): </div>');
        var $dropdownContainer = $('<div class="technique-container">Techniques: <select class="technique-select"><option value="Accurate">Accurate</option><option value="Reach">Reach</option><option value="Vampiric">Vampiric</option></select><button class="add-technique">Add</button><div class="technique-list"></div></div>');

        $('#fighting-style-container').append($header);
        $('#fighting-style-container').append($dropdownContainer);

        $dropdownContainer.find('.add-technique').click(function() {
            var technique = $(this).siblings('.technique-select').val();
            var $techniqueList = $(this).siblings('.technique-list');

            $techniqueList.append('<div class="technique-item" data-technique="' + technique + '">' + technique + ' <button class="remove-technique">&times;</button></div>');
            calculatePoints();

            $('.remove-technique').click(function() {
                $(this).parent().remove();
                calculatePoints();
            });
        });
    }

    function addFightingStyleHeader2() {
        var $header = $('<div class="fighting-style-header"><input type="text" placeholder="Enter style name"> fighting style: </div>');
        var $dropdownContainer = $('<div class="technique-container">Techniques: <select class="technique-select"><option value="Accurate">Accurate</option><option value="Vampiric">Vampiric</option></select><button class="add-technique">Add</button><div class="technique-list"></div></div>');

        $('#fighting-style-container2').append($header);
        $('#fighting-style-container2').append($dropdownContainer);

        $dropdownContainer.find('.add-technique').click(function() {
            var technique = $(this).siblings('.technique-select').val();
            var $techniqueList = $(this).siblings('.technique-list');
            var gradeDropdown = $('<select class="technique-grade"></select>');
            populateGrades(gradeDropdown);      //change this for dropdown

            var $techniqueItem = $('<div class="technique-item2" data-technique="' + technique + '"></div>');
            $techniqueItem.append('<input type="checkbox" class="technique-discount"> ');
            $techniqueItem.append(technique + ' ').append(gradeDropdown).append(' <span class="technique-cost">' + techniqueCosts2[technique][0] + '</span> <button class="remove-technique">&times;</button>');
            $techniqueList.append($techniqueItem);
            calculatePoints();

            gradeDropdown.change(function() {
                var selectedGradeIndex = $(this).prop('selectedIndex');
                var newPointCost = techniqueCosts2[technique][selectedGradeIndex];
                $(this).siblings('.technique-cost').text(newPointCost);
                calculatePoints();
            });

            $('.remove-technique').click(function() {
                $(this).parent().remove();
                calculatePoints();
            });
        });
    }

    function removeFightingStyleHeaders() {
        $('.fighting-style-header, .technique-container').remove();
    }
    function removeFightingStyleTechniques() {
        $('.technique-item2').each(function() {
            $(this).remove();
        });
    }

    function updateSkillOptions() {
        var strength = $('#strength').val();
        var precision = $('#precision').val();
        var intelligence = $('#intelligence').val();
        var vitality = $('#vitality').val();
        var speed = $('#speed').val();
        var chgrade = $('#chgrade').val();
        var magic = $('#magic').val();
    
        var $skillSelect = $('#skill-select');
        $skillSelect.empty(); // Clear existing options
    
        for (var i = 0; i < skillTypes.length; i++) {
            var skill = skillTypes[i];
            var statDependency = skill.statDependency;
            var shouldDisplay = false;

            if (statDependency === 'Strength' && strength >= 7) {
                shouldDisplay = true;
            } else if (statDependency === 'Precision' && precision >= 7) {
                shouldDisplay = true;
            } else if (statDependency === 'Intelligence' && intelligence >= 7) {
                shouldDisplay = true;
            } else if (statDependency === 'Speed' && speed >= 7) {
                shouldDisplay = true;
            } else if (statDependency === 'Vitality' && vitality >= 7) {
                shouldDisplay = true;
            } else if (statDependency === 'ChGrade' && chgrade >= 7) {
                shouldDisplay = true;
            } else if (statDependency === 'Magic' && magic >= 7) {
                shouldDisplay = true;
            } else if (statDependency === ' ') {
                shouldDisplay = true;
            }

            //hard coded for these exceptions
            if (skill.name === 'Flight' && precision >= 21) {
                shouldDisplay = true;
            } else if (skill.name === 'Flight' && precision < 21) {
                shouldDisplay = false;
            }

            if (skill.name === 'Always Outnumbered' && chgrade >= 21) {
                shouldDisplay = true;
            } else if (skill.name === 'Always Outnumbered' && chgrade < 21) {
                shouldDisplay = false;
            }

            if (skill.name === 'Appraisal (Isekai)' && chgrade >= 0) {
                shouldDisplay = true;
            } else if (skill.name === 'Appraisal (Isekai)' && chgrade < 0) {
                shouldDisplay = false;
            }

            if (skill.name === 'Appraisal (Native)' && chgrade >= 0) {
                shouldDisplay = true;
            } else if (skill.name === 'Appraisal (Native)' && chgrade < 0) {
                shouldDisplay = false;
            }

            if (skill.name === 'Attentive Student' && chgrade >= 0) {
                shouldDisplay = true;
            } else if (skill.name === 'Attentive Student' && chgrade < 0) {
                shouldDisplay = false;
            }

            if (skill.name === 'Narrative Booster' && chgrade >= 0) {
                shouldDisplay = true;
            } else if (skill.name === 'Narrative Booster' && chgrade < 0) {
                shouldDisplay = false;
            }

            if (skill.name === 'Componentless' && magic >= 0) {
                shouldDisplay = true;
            } else if (skill.name === 'Componentless' && magic < 0) {
                shouldDisplay = false;
            }
    
            if (shouldDisplay) {
                $skillSelect.append('<option value="' + skill.name + '">' + skill.name + '</option>');
            }
        }
    }

    function removeMagicSkills() {
    $('.skill-row').each(function() {
        var skillStatDependency = $(this).data('stat-dependency');
        if (skillStatDependency === 'Magic') {
            $(this).remove();
        }
    });
    }


    function calculateCharacterGrade() {
        // Calculate average of all stats
        var grades = ['F','E', 'D', 'C', 'B', 'A', 'S'];
        var totalStats = 0;
        $('.stat-grade').each(function() {
            totalStats += parseInt($(this).val());
        });
        var averageGrade = Math.floor(totalStats / 35);
        $('#hidden-character-grade').text(grades[averageGrade]);
        $('#chgrade').val(averageGrade * 7);
    }

    // function to calculate points
function calculatePoints() {
    var points = 0;
    
    // add skill points
    $('.skill-grade').each(function() {
        points += parseInt($(this).val()) || 0;
    });
    // add stat points
    $('.stat-grade').each(function() {
        points += parseInt($(this).val()) || 0;
    });
    // add equipment points
    $('.equipment-cost').each(function() {
        points += parseInt($(this).text()) || 0;
    });
    // add custom points
    $('.custom-price').each(function() {
        points += parseInt($(this).val()) || 0;
    });

    // Add points for techniques
    $('.technique-item').each(function() {
        var technique = $(this).data('technique');
        points += techniqueCosts[technique] || 0;
    });

    $('.technique-item2').each(function() {
        var technique = $(this).data('technique');
        var gradeIndex = $(this).find('.technique-grade').prop('selectedIndex');
        var baseCost = techniqueCosts2[technique][gradeIndex] || 0;
        var discount = $(this).find('.technique-discount').is(':checked') ? 7 : 0;
        points += (baseCost - discount);
    });


    // update points
    $('#point-value').text(points);
    var earnedpoints = (parseInt($('#earned-points').val()) || 0);

    // Add points from earned points checkboxes
    if ($('#born-for-this').is(':checked')) {
        earnedpoints += 7;
    }
    if ($('#cashback').is(':checked')) {
        earnedpoints += 28;
    }

    // Include the companion grade cost
    if ($('#companion').is(':checked')) {
        earnedpoints += parseInt($('#companion-grade').val());
    }

    if ($('#minion').is(':checked')) {
        earnedpoints -= 49;
    }
    // check if over limit
    if (points > (105+earnedpoints)) {
        $('#points').css('color', 'red');
        alert('Points exceed limit!')
    } else {
        $('#points').css('color', '#ddd');
    }

}

});


function updateEquipmentCost(equipmentRow) {
    var gradeValue = parseInt(equipmentRow.find('.equipment-grade').val()) || 0;
    var cost = gradeValue;

    // Double the cost for each checked checkbox
    equipmentRow.find('.equipment-option').each(function() {
        if ($(this).is(':checked')) {
            cost *= 2;
        }
    });

    equipmentRow.find('.equipment-cost').text(cost);
}

