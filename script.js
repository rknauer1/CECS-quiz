const questions = [
    {
        question: "In non-listed assemblies, at what minimum angle from the horizontal must filters be installed?",
        options: ["A. 30 degrees", "B. 45 degrees", "C. 60 degrees", "D. 90 degrees"],
        correctAnswer: "B. 45 degrees"
    },
    {
        question: "What is the minimum required space between a deep fat fryer and surface flames from adjacent cooking equipment?",
        options: ["A. 12 inches", "B. 16 inches", "C. 24 inches", "D. 36 inches"],
        correctAnswer: "B. 16 inches"
    },
    {
        question: "When installing an access panel in a horizontal, non-listed duct, the edge of the opening must be at least how far from the edges of the duct or its welded seams?",
        options: ["A. 1.0 inch", "B. 1.5 inches", "C. 2.0 inches", "D. 2.5 inches"],
        correctAnswer: "B. 1.5 inches"
    },
    {
        question: "Horizontal duct systems that are 24 inches or larger must be designed to support the weight of the ductwork plus an additional weight of at least:",
        options: ["A. 500 lbs", "B. 650 lbs", "C. 800 lbs", "D. 1000 lbs"],
        correctAnswer: "C. 800 lbs"
    },
    {
        question: "According to code, an upblast fan's drain must be directed to a grease receptacle with a capacity not to exceed:",
        options: ["A. 1 gallon", "B. 2 gallons", "C. 3 gallons", "D. 5 gallons"],
        correctAnswer: "A. 1 gallon"
    },
    {
        question: "Fasteners used to secure access panels, such as bolts or wing nuts, must be made of carbon steel or stainless steel, and their installation must not:",
        options: ["A. Require special tools", "B. Be completed by one person", "C. Penetrate duct walls", "D. Use locking washers"],
        correctAnswer: "C. Penetrate duct walls"
    },
    {
        question: "In a recirculating system, how often must the entire hood plenum and blower section be cleaned?",
        options: ["A. Weekly", "B. Monthly", "C. Every 3 months", "D. Every 6 months"],
        correctAnswer: "C. Every 3 months"
    },
    {
        question: "Recirculating systems are only permitted to be used with which type of cooking appliances?",
        options: ["A. Solid fuel or electric", "B. Electric or gas-fueled", "C. Gas-fueled or solid fuel", "D. Any appliance with an interlock"],
        correctAnswer: "B. Electric or gas-fueled"
    },
    {
        question: "For recirculating systems equipped with Electrostatic Precipitator (ESP) cells, what is the minimum cleaning frequency for the ESP cells?",
        options: ["A. Daily", "B. Weekly", "C. Monthly", "D. Quarterly"],
        correctAnswer: "B. Weekly"
    },
    {
        question: "Which of the following is used for odor control in some kitchen exhaust systems?",
        options: ["A. Sodium chloride", "B. Activated charcoal", "C. Potassium permanganate", "D. Calcium carbonate"],
        correctAnswer: "C. Potassium permanganate"
    },
    {
        question: "What is the minimum replacement frequency for fusible links of the metal alloy type?",
        options: ["A. Annually", "B. Semi-annually", "C. Quarterly", "D. Monthly"],
        correctAnswer: "B. Semi-annually"
    },
    {
        question: "The first step to take when cleaning or inspecting a multiple-pass disposable filter pollution control unit is to:",
        options: ["A. Disconnect the power source", "B. Remove the filters", "C. Inspect the operation controls", "D. Check for grease accumulation"],
        correctAnswer: "C. Inspect the operation controls"
    },
    {
        question: "Systems serving solid fuel cooking operations must be inspected at what frequency?",
        options: ["A. Weekly", "B. Monthly", "C. Quarterly", "D. Semi-annually"],
        correctAnswer: "B. Monthly"
    },
    {
        question: "A 24-hour restaurant using charbroilers is considered a high-volume cooking operation. How often should its exhaust system be inspected?",
        options: ["A. Monthly", "B. Quarterly", "C. Semi-annually", "D. Annually"],
        correctAnswer: "B. Quarterly"
    },
    {
        question: "A grease depth measurement of which of the following in the ductwork would indicate an immediate need for cleaning?",
        options: ["A. 50 microns", "B. 1000 microns", "C. 1500 microns", "D. 2000 microns"],
        correctAnswer: "D. 2000 microns"
    },
    {
        question: "What is the maximum allowable grease depth measurement immediately after a kitchen exhaust system has been cleaned?",
        options: ["A. 0 microns (bare metal)", "B. 50 microns", "C. 100 microns", "D. 250 microns"],
        correctAnswer: "B. 50 microns"
    },
    {
        question: "After cleaning is complete, the service provider must give the owner a written report that specifies the work performed as well as any areas that were:",
        options: ["A. Previously damaged", "B. A fire hazard", "C. Inaccessible or not cleaned", "D. In need of future repair"],
        correctAnswer: "C. Inaccessible or not cleaned"
    },
    {
        question: "Which of the following pieces of information must be displayed on a sticker on or adjacent to an access panel?",
        options: ["A. Technician's name and certification number", "B. Service company name and date of cleaning", "C. Time of day the service was performed", "D. Type of cleaning chemicals used"],
        correctAnswer: "B. Service company name and date of cleaning"
    },
    {
        question: "What sign must be placed on all access panels in a kitchen exhaust system?",
        options: ["A. CAUTION: HOT SURFACE", "B. RESTRICTED ACCESS", "C. ACCESS PANEL DO NOT OBSTRUCT", "D. AUTHORIZED PERSONNEL ONLY"],
        correctAnswer: "C. ACCESS PANEL DO NOT OBSTRUCT"
    },
    {
        question: "When cleaning a kitchen exhaust system, what precaution must be taken regarding the fire suppression system components?",
        options: ["A. They must be removed and cleaned separately", "B. They must be tested before and after service", "C. They must be covered with a heat-resistant material", "D. They shall not be rendered inoperable"],
        correctAnswer: "D. They shall not be rendered inoperable"
    },
    {
        question: "A 'listed' hood assembly must be installed in accordance with:",
        options: ["A. The local fire code only", "B. The recommendations of the AHJ", "C. The terms of its listing and the manufacturer's instructions", "D. The NFPA 96 standard exclusively"],
        correctAnswer: "C. The terms of its listing and the manufacturer's instructions"
    },
    {
        question: "Downdraft appliance ventilation systems must be provided with interlocks to ensure that cooking fuel cannot be activated unless:",
        options: ["A. The grease reservoir has been emptied", "B. The fire suppression system is armed", "C. The exhaust fan and the supply fan are activated", "D. The adjacent cooking appliances are turned off"],
        correctAnswer: "C. The exhaust fan and the supply fan are activated"
    },
    {
        question: "Before performing maintenance that requires entry into ductwork, what is the most critical initial safety procedure?",
        options: ["A. Ensuring the technician has a radio", "B. Setting up proper fall protection", "C. Verifying the fire suppression system is charged", "D. Implementing lock-out/tag-out on the exhaust fan"],
        correctAnswer: "D. Implementing lock-out/tag-out on the exhaust fan"
    },
    {
        question: "Confined space entry is considered to occur as soon as:",
        options: ["A. The access panel is unlatched", "B. The technician's head enters the opening", "C. Any part of the entrant's body breaks the plane of the opening of the ductwork", "D. The technician is fully inside the ductwork"],
        correctAnswer: "C. Any part of the entrant's body breaks the plane of the opening of the ductwork"
    },
    {
        question: "An employer's program for Personal Protective Equipment (PPE) must state how they will select, maintain, and:",
        options: ["A. Dispose of PPE", "B. Evaluate PPE", "C. Purchase PPE", "D. Store PPE"],
        correctAnswer: "B. Evaluate PPE"
    },
    {
        question: "Which of the following is the best definition of solid cooking fuel as defined by NFPA 96?",
        options: ["A. Any fuel that is not a liquid or a gas", "B. Processed wood pellets and charcoal briquettes", "C. Consumable, organic material suchs as hardwood or mesquite", "D. Any combustible material used for flavoring"],
        correctAnswer: "C. Consumable, organic material suchs as hardwood or mesquite"
    },
    {
        question: "What is the minimum clearance that must be maintained between solid fuel (e.g., a wood pile) and any portion of a solid fuel appliance?",
        options: ["A. 12 inches", "B. 24 inches", "C. 3 feet", "D. 5 feet"],
        correctAnswer: "C. 3 feet"
    },
    {
        question: "When may solid fuel cooking equipment share a common hood and duct system with other cooking equipment?",
        options: ["A. When an extra fire suppression nozzle is added", "B. When the fan is upgraded for higher airflow", "C. When the solid fuel unit is gas-operated and uses the solid fuel only for flavoring", "D. When the ductwork is inspected weekly instead of monthly"],
        correctAnswer: "C. When the solid fuel unit is gas-operated and uses the solid fuel only for flavoring"
    },
    {
        question: "What is one of the primary responsibilities an employer has regarding hazardous chemicals in the workplace?",
        options: ["A. Identify and inventory the chemicals", "B. Only use non-toxic, biodegradable chemicals", "C. Ensure all chemicals are stored in a single location", "D. Provide annual reports to the EPA"],
        correctAnswer: "A. Identify and inventory the chemicals"
    },
    {
        question: "The wastewater generated from cleaning a kitchen exhaust system contains grease. What is the proper method of disposal?",
        options: ["A. Collected and disposed of at a designated facility or via a grease trap", "B. Poured down a sanitary sewer drain at the job site", "C. Poured down a storm drain if no sanitary sewer is available", "D. Allowed to evaporate, with the solid residue disposed of in the trash"],
        correctAnswer: "A. Collected and disposed of at a designated facility or via a grease trap"
    },
    {
        question: "Unless a reduction system is used, what is the minimum clearance required between an unenclosed exhaust duct and combustible material?",
        options: ["A. 0 in (0 mm)", "B. 3 in (76 mm)", "C. 9 in (229 mm)", "D. 18 in (457 mm)"],
        correctAnswer: "D. 18 in (457 mm)"
    },
    {
        question: "What is the minimum vertical distance that must be maintained between the lower edge of a grease removal device and the cooking surface of a solid fuel charbroiler?",
        options: ["A. 6 in (152 mm)", "B. 18 in (457 mm)", "C. 3 ft (0.92 m)", "D. 4 ft (1.22 m)"],
        correctAnswer: "D. 4 ft (1.22 m)"
    },
    {
        question: "A hinged upblast fan on a rooftop must be installed so that its point of attachment to the ductwork is at least how far away from the roof surface?",
        options: ["A. 10 in (254 mm)", "B. 18 in (457 mm)", "C. 36 in (914 mm)", "D. 40 in (1.02 m)"],
        correctAnswer: "B. 18 in (457 mm)"
    },
    {
        question: "All deep-fat fryers must be installed with at least how much space between the fryer and surface flames from adjacent cooking equipment?",
        options: ["A. 8 in (203 mm)", "B. 12 in (305 mm)", "C. 16 in (406 mm)", "D. 18 in (457 mm)"],
        correctAnswer: "C. 16 in (406 mm)"
    },
    {
        question: "When a clearance reduction system using 28-gauge sheet metal on noncombustible spacers is installed, what is the new minimum clearance to combustible material?",
        options: ["A. 3 in (76 mm)", "B. 9 in (229 mm)", "C. 12 in (305 mm)", "D. 18 in (457 mm)"],
        correctAnswer: "B. 9 in (229 mm)"
    },
    {
        question: "A rooftop termination outlet must have a minimum horizontal clearance of what distance from an adjacent building's air intake?",
        options: ["A. 3 ft (0.92 m)", "B. 5 ft (1.5 m)", "C. 10 ft (3 m)", "D. 15 ft (4.5 m)"],
        correctAnswer: "C. 10 ft (3 m)"
    },
    {
        question: "A hinged upblast fan on a rooftop must discharge a minimum of how far away from the roof surface?",
        options: ["A. 18 in (457 mm)", "B. 24 in (610 mm)", "C. 36 in (914 mm)", "D. 40 in (1.02 m)"],
        correctAnswer: "D. 40 in (1.02 m)"
    },
    {
        question: "For cooking equipment without an exposed flame where flue gases bypass the filter, the minimum vertical distance between the filter and the cooking surface can be reduced to what measurement?",
        options: ["A. 6 in (152 mm)", "B. 9 in (229 mm)", "C. 12 in (305 mm)", "D. 18 in (457 mm)"],
        correctAnswer: "A. 6 in (152 mm)"
    },
    {
        question: "What is the minimum required clearance between an unenclosed exhaust duct and limited-combustible material?",
        options: ["A. 0 in (0 mm)", "B. 3 in (76 mm)", "C. 6 in (152 mm)", "D. 9 in (229 mm)"],
        correctAnswer: "B. 3 in (76 mm)"
    },
    {
        question: "A steel baffle plate used to protect a grease removal device must be located at least how far from the device itself?",
        options: ["A. 3 in (76 mm)", "B. 6 in (152 mm)", "C. 12 in (305 mm)", "D. 18 in (457 mm)"],
        correctAnswer: "B. 6 in (152 mm)"
    },
    {
        question: "What is the minimum distance between a grease removal device and a cooking surface, unless special conditions apply?",
        options: ["A. 12 in (305 mm)", "B. 16 in (406 mm)", "C. 18 in (457 mm)", "D. 24 in (610 mm)"],
        correctAnswer: "C. 18 in (457 mm)"
    },
    {
        question: "The requirement for a 16-inch space between a fryer and surface flames can be waived if a steel or tempered glass baffle plate of what minimum height is installed?",
        options: ["A. 6 in (152 mm)", "B. 8 in (203 mm)", "C. 12 in (305 mm)", "D. 16 in (406 mm)"],
        correctAnswer: "B. 8 in (203 mm)"
    },
    {
        question: "A rooftop termination fan housing must have a minimum horizontal clearance of what distance from any combustible structure?",
        options: ["A. 3 ft (0.92 m)", "B. 5 ft (1.5 m)", "C. 10 ft (3 m)", "D. 18 ft (5.5 m)"],
        correctAnswer: "B. 5 ft (1.5 m)"
    },
    {
        question: "When a baffle plate is used to protect a grease removal device, it must be sized so that flames travel a distance of at least how far from the heat source to the device?",
        options: ["A. 6 in (152 mm)", "B. 12 in (305 mm)", "C. 18 in (457 mm)", "D. 24 in (610 mm)"],
        correctAnswer: "C. 18 in (457 mm)"
    },
    {
        question: "What is the minimum clearance between an unenclosed exhaust duct and noncombustible material?",
        options: ["A. 0 in (0 mm)", "B. 1 in (25 mm)", "C. 3 in (76 mm)", "D. 6 in (152 mm)"],
        correctAnswer: "A. 0 in (0 mm)"
    },
    {
        question: "At what measured depth of grease accumulation must surfaces in a kitchen exhaust system be cleaned?",
        options: ["A. 50 µm (0.002 in)", "B. 1000 µm (0.039 in)", "C. 2000 µm (0.078 in)", "D. 3175 µm (0.125 in)"],
        correctAnswer: "C. 2000 µm (0.078 in)"
    },
    {
        question: "After cleaning, hoods, grease removal devices, and ducts must be cleaned to a maximum combustible contaminant level of what depth?",
        options: ["A. 50 µm (0.002 in)", "B. 100 µm (0.004 in)", "C. 500 µm (0.020 in)", "D. 1000 µm (0.039 in)"],
        correctAnswer: "A. 50 µm (0.002 in)"
    },
    {
        question: "A rooftop exhaust outlet must have a vertical separation of what distance above any air intakes that are located within 10 feet horizontally?",
        options: ["A. 18 in (457 mm)", "B. 2 ft (0.61 m)", "C. 3 ft (0.92 m)", "D. 5 ft (1.5 m)"],
        correctAnswer: "C. 3 ft (0.92 m)"
    },
    {
        question: "At what measured depth of grease accumulation must a fan housing be cleaned?",
        options: ["A. 1000 µm (0.039 in)", "B. 2000 µm (0.078 in)", "C. 2500 µm (0.098 in)", "D. 3175 µm (0.125 in)"],
        correctAnswer: "D. 3175 µm (0.125 in)"
    },
    {
        question: "When a clearance reduction system using 22-gauge sheet metal on 1-inch mineral wool batts is installed, what is the new minimum clearance to combustible material?",
        options: ["A. 3 in (76 mm)", "B. 6 in (152 mm)", "C. 9 in (229 mm)", "D. 12 in (305 mm)"],
        correctAnswer: "A. 3 in (76 mm)"
    },
    {
        question: "After cleaning is complete, a written report must be provided to the system owner within what timeframe?",
        options: ["A. 48 hours", "B. 5 business days", "C. 2 weeks", "D. 30 days"],
        correctAnswer: "C. 2 weeks"
    },
    {
        question: "Which of the following is explicitly forbidden for use as a cleaning aid in a kitchen exhaust system?",
        options: ["A. Abrasive powders", "B. Flammable solvents", "C. High-pressure steam", "D. Caustic chemicals"],
        correctAnswer: "B. Flammable solvents"
    },
    {
        question: "Which of the following components must not have cleaning chemicals applied to them?",
        options: ["A. Fan blades", "B. Duct access panels", "C. Fusible links", "D. Grease collection cups"],
        correctAnswer: "C. Fusible links"
    },
    {
        question: "What is the first step that must be taken at the start of the cleaning process to ensure safety?",
        options: ["A. Cover all cooking appliances.", "B. Notify the local fire department.", "C. Lock out electrical switches that could be accidentally activated.", "D. Test the fire suppression system."],
        correctAnswer: "C. Lock out electrical switches that could be accidentally activated."
    },
    {
        question: "After cleaning is completed, what must be done with access panels and cover plates?",
        options: ["A. Tagged with the date of the next required cleaning.", "B. Restored to their normal operational condition.", "C. Sealed with a temporary, non-grease-tight sealant.", "D. Left open for 24 hours to allow for ventilation."],
        correctAnswer: "B. Restored to their normal operational condition."
    },
    {
        question: "Who is permitted to render a fire-extinguishing system inoperable during the cleaning process?",
        options: ["A. Any certified cleaning technician", "B. The building owner or agent", "C. Properly trained and qualified persons servicing the system", "D. The local authority having jurisdiction"],
        correctAnswer: "C. Properly trained and qualified persons servicing the system"
    },
    {
        question: "According to the standard, what must be done with grease removal devices that are found to be broken or have missing components?",
        options: ["A. They must be cleaned and reinstalled.", "B. They must be documented in the cleaning report.", "C. They can be repaired on-site with equivalent parts.", "D. They shall be replaced."],
        correctAnswer: "D. They shall be replaced."
    },
    {
        question: "An adhesive label attached to the hood after an inspection or cleaning must remain affixed until what time?",
        options: ["A. The end of the calendar year", "B. The report is filed with the AHJ", "C. The next inspection or cleaning event", "D. 30 days after the service date"],
        correctAnswer: "C. The next inspection or cleaning event"
    },
    {
        question: "Metal containers used for collecting grease drippings from the system must be inspected or emptied at what minimum frequency?",
        options: ["A. Daily", "B. Every 3 days", "C. At least weekly", "D. At least monthly"],
        correctAnswer: "C. At least weekly"
    }
     {
        question: "What is the primary purpose of a Lockout/Tagout (LOTO) procedure in the context of kitchen exhaust system maintenance?",
        options: ["A. To prevent unauthorized access to the kitchen area during cleaning.", "B. To ensure all tools are properly accounted for after work.", "C. To de-energize and secure equipment to prevent accidental startup during service.", "D. To log the duration of the cleaning service for billing purposes."],
        correctAnswer: "C. To de-energize and secure equipment to prevent accidental startup during service."
    },
    {
        question: "When working on a sloped roof, at what height must fall protection systems be utilized?",
        options: ["A. Any height above 4 feet.", "B. Any height above 6 feet.", "C. Any height where there is a risk of a fall to a lower level.", "D. Only when the slope exceeds 4:12 pitch."],
        correctAnswer: "B. Any height above 6 feet."
    },
    {
        question: "What is the recommended method for inspecting a ladder for defects before use?",
        options: ["A. A quick visual check from a distance.", "B. A thorough inspection of rungs, rails, and feet before each use.", "C. Checking only for obvious structural damage.", "D. Relying on the last user's assessment."],
        correctAnswer: "B. A thorough inspection of rungs, rails, and feet before each use."
    },
    {
        question: "Before entering a duct system for cleaning, what must be done if the duct has multiple entry points?",
        options: ["A. Only the nearest entry point needs to be secured.", "B. All entry points must be marked with a 'Caution' sign.", "C. All potential entry points must be secured and monitored.", "D. Only entry points visible from the work area need attention."],
        correctAnswer: "C. All potential entry points must be secured and monitored."
    },
    {
        question: "What is the primary risk associated with working in an unventilated area filled with cleaning fumes?",
        options: ["A. Increased cleaning solution evaporation.", "B. Asphyxiation or chemical poisoning.", "C. Damage to the cleaning equipment.", "D. Discoloration of the ductwork."],
        correctAnswer: "B. Asphyxiation or chemical poisoning."
    },
    {
        question: "What does the term \"Competent Person\" mean in an OSHA context related to safety?",
        options: ["A. Anyone with basic safety training.", "B. Someone capable of identifying hazards and authorized to take corrective action.", "C. A person certified in first aid and CPR.", "D. An individual who has completed an OSHA 10-hour course."],
        correctAnswer: "B. Someone capable of identifying hazards and authorized to take corrective action."
    },
    {
        question: "What is a common cause of slips, trips, and falls during kitchen exhaust cleaning operations?",
        options: ["A. Using too much water for cleaning.", "B. Grease and cleaning solution residue on floors and work surfaces.", "C. Insufficient lighting in the kitchen area.", "D. Lack of communication among team members."],
        correctAnswer: "B. Grease and cleaning solution residue on floors and work surfaces."
    },
    {
        question: "What is the primary function of a baffle filter in a commercial kitchen exhaust system?",
        options: ["A. To remove odors from the exhaust air.", "B. To create tortuous pathways to separate grease particles from the air.", "C. To chemically neutralize grease vapors.", "D. To provide structural support for the hood."],
        correctAnswer: "B. To create tortuous pathways to separate grease particles from the air."
    },
    {
        question: "Which type of hood is designed to directly capture effluent from a cooking appliance without requiring a full canopy?",
        options: ["A. Island canopy hood.", "B. Compensating hood.", "C. Eyebrow hood.", "D. Pass-over hood."],
        correctAnswer: "C. Eyebrow hood."
    },
    {
        question: "Exhaust ducts serving Type I hoods must be constructed of which material and gauge at minimum?",
        options: ["A. 18 gauge galvanized steel.", "B. 16 gauge aluminum.", "C. 16 gauge carbon steel or 18 gauge stainless steel.", "D. 20 gauge stainless steel."],
        correctAnswer: "C. 16 gauge carbon steel or 18 gauge stainless steel."
    },
    {
        question: "Exhaust ducts must be provided with a minimum clearance of 18 inches to combustible materials. How is this clearance commonly reduced without requiring a larger space?",
        options: ["A. By painting the duct with fire-retardant paint.", "B. By installing a listed clearance reduction system.", "C. By wrapping the duct in standard insulation.", "D. By increasing the exhaust fan's airflow."],
        correctAnswer: "B. By installing a listed clearance reduction system."
    },
    {
        question: "In a commercial kitchen, what is the general purpose of a make-up air unit?",
        options: ["A. To filter the exhaust air before discharge.", "B. To replenish air exhausted by the hood, preventing negative pressure.", "C. To cool the cooking line.", "D. To provide backup ventilation during fan failure."],
        correctAnswer: "B. To replenish air exhausted by the hood, preventing negative pressure."
    },
    {
        question: "How must duct sections be joined together to ensure a grease-tight seal?",
        options: ["A. With duct tape and sheet metal screws.", "B. Using snap-lock connections with sealant.", "C. By continuous liquid-tight external welds.", "D. With pop rivets and silicone caulk."],
        correctAnswer: "C. By continuous liquid-tight external welds."
    },
    {
        question: "What type of filter is explicitly prohibited for use in commercial kitchen exhaust systems unless it is part of a listed device?",
        options: ["A. Baffle filters.", "B. Cartridge filters.", "C. Mesh filters.", "D. Activated carbon filters."],
        correctAnswer: "C. Mesh filters."
    },
    {
        question: "How often must filters be removed and cleaned or replaced to prevent excessive grease accumulation?",
        options: ["A. Annually.", "B. Monthly.", "C. Weekly.", "D. As often as necessary to maintain acceptable grease levels."],
        correctAnswer: "D. As often as necessary to maintain acceptable grease levels."
    },
    {
        question: "What is the primary function of an access panel in a kitchen exhaust duct system?",
        options: ["A. To allow for airflow measurement.", "B. To permit inspection and cleaning of the duct interior.", "C. To provide a point for chemical injection.", "D. To mount auxiliary equipment."],
        correctAnswer: "B. To permit inspection and cleaning of the duct interior."
    },
    {
        question: "An exhaust fan must be designed and installed to convey air at what temperature range?",
        options: ["A. Up to 100°F (38°C).", "B. Up to 200°F (93°C).", "C. Up to 300°F (149°C).", "D. Up to 400°F (204°C)."],
        correctAnswer: "C. Up to 300°F (149°C)."
    },
    {
        question: "Which component of a Pollution Control Unit (PCU) is specifically designed to remove very fine grease particles using an electrical charge?",
        options: ["A. UV-C lamp.", "B. Carbon filter.", "C. Electrostatic Precipitator (ESP).", "D. Catalytic converter."],
        correctAnswer: "C. Electrostatic Precipitator (ESP)."
    },
    {
        question: "What is the primary method by which UV-C light systems reduce grease buildup in exhaust ducts?",
        options: ["A. By physically scrubbing the duct surfaces.", "B. By creating a chemical reaction that oxidizes grease vapors into smaller, less adhesive particles.", "C. By heating the grease until it evaporates.", "D. By repelling grease particles with an electric field."],
        correctAnswer: "B. By creating a chemical reaction that oxidizes grease vapors into smaller, less adhesive particles."
    },
    {
        question: "In a recirculating system, where must a listed fire damper be installed?",
        options: ["A. At the entrance to the hood.", "B. On the discharge side of the recirculating system.", "C. Within the ductwork leading to the fan.", "D. Inside the air intake plenum."],
        correctAnswer: "B. On the discharge side of the recirculating system."
    },
    {
        question: "Which type of Pollution Control Unit (PCU) component is primarily used for odor control?",
        options: ["A. Electrostatic precipitator.", "B. UV-C light.", "C. Activated carbon filter.", "D. Grease baffle filter."],
        correctAnswer: "C. Activated carbon filter."
    },
    {
        question: "How does a catalytic converter typically function within a PCU to reduce emissions?",
        options: ["A. By electrically charging particles.", "B. By oxidizing grease into dust using UV light.", "C. By converting pollutants into less harmful substances through chemical reactions.", "D. By filtering particles physically."],
        correctAnswer: "C. By converting pollutants into less harmful substances through chemical reactions."
    },
    {
        question: "What safety feature is critical for UV-C lamps in exhaust systems to prevent exposure to personnel?",
        options: ["A. A clear glass housing.", "B. An interlock that deactivates the lamp when access panels are opened.", "C. A manual shut-off switch located outside the kitchen.", "D. A warning light that illuminates during operation."],
        correctAnswer: "B. An interlock that deactivates the lamp when access panels are opened."
    },
    {
        question: "What is the typical flow direction of air through an electrostatic precipitator unit?",
        options: ["A. Fan, collecting cell, ionizer.", "B. Collecting cell, ionizer, fan.", "C. Ionizer, collecting cell, fan.", "D. Fan, ionizer, collecting cell."],
        correctAnswer: "C. Ionizer, collecting cell, fan."
    },
    {
        question: "For a kitchen exhaust system in a low-volume cooking operation (e.g., churches, day camps), what is the minimum inspection frequency?",
        options: ["A. Monthly.", "B. Quarterly.", "C. Annually.", "D. Semi-annually."],
        correctAnswer: "C. Annually."
    },
    {
        question: "If, upon inspection, an exhaust system is found to be contaminated with deposits, who is primarily responsible for ensuring it is cleaned?",
        options: ["A. The local Authority Having Jurisdiction (AHJ).", "B. The certified cleaning technician.", "C. The system owner.", "D. The fire department."],
        correctAnswer: "C. The system owner."
    },
    {
        question: "In addition to work performed, what specific information must a written service report contain regarding areas that were not cleaned?",
        options: ["A. A recommendation to replace the uncleaned sections.", "B. Specification of inaccessible or uncleaned areas.", "C. An estimated cost for cleaning the uncleaned areas.", "D. A waiver of liability for uncleaned areas."],
        correctAnswer: "B. Specification of inaccessible or uncleaned areas."
    },
    {
        question: "After cleaning, what critical step must be performed before leaving the site to ensure system functionality?",
        options: ["A. Recalibrating the cooking appliances.", "B. Verifying that the exhaust fan operates correctly.", "C. Measuring the air temperature inside the duct.", "D. Applying a rust-inhibiting coating to the ductwork."],
        correctAnswer: "B. Verifying that the exhaust fan operates correctly."
    },
    {
        question: "Why must solid fuel cooking operations typically have a dedicated, separate exhaust system?",
        options: ["A. To prevent the mixing of different types of exhaust fumes.", "B. Due to the unique nature and higher fire risk of their effluents (e.g., creosote, sparks).", "C. To comply with energy efficiency regulations.", "D. To allow for easier cleaning access."],
        correctAnswer: "B. Due to the unique nature and higher fire risk of their effluents (e.g., creosote, sparks)."
    },
    {
        question: "When storing cleaning chemicals, what is a crucial environmental consideration?",
        options: ["A. Storing them in clear containers for easy identification.", "B. Storing them next to food preparation areas for convenience.", "C. Storing them in leak-proof containers away from heat, ignition sources, and incompatible materials.", "D. Storing them on the highest shelf to keep them out of reach."],
        correctAnswer: "C. Storing them in leak-proof containers away from heat, ignition sources, and incompatible materials."
    },
         {
        question: "A commercial kitchen is equipped with a Pollution Control Unit (PCU) utilizing an Electrostatic Precipitator (ESP). During routine maintenance, a technician notes a significant drop in collection efficiency despite proper cleaning of the collecting plates. What is the most likely underlying issue?",
        options: ["A. The UV-C lamps are at the end of their service life.", "B. The activated carbon filters are saturated.", "C. The ionizing section's electrodes are misaligned or damaged.", "D. The exhaust fan is operating at an insufficient speed."],
        correctAnswer: "C. The ionizing section's electrodes are misaligned or damaged."
    },
    {
        question: "An exhaust system incorporates a UV-C light technology for grease reduction. Which of the following best describes the primary mechanism by which UV-C contributes to this reduction?",
        options: ["A. It physically burns off accumulated grease deposits within the duct.", "B. It creates ozone, which then chemically neutralizes grease particles.", "C. It uses short-wavelength radiation to oxidize grease vapors, making them less adhesive.", "D. It causes grease particles to clump together, facilitating their capture by baffle filters."],
        correctAnswer: "C. It uses short-wavelength radiation to oxidize grease vapors, making them less adhesive."
    },
    {
        question: "For a commercial cooking recirculating system, the entire hood plenum and blower section must be cleaned at what minimum frequency?",
        options: ["A. Monthly.", "B. Every 3 months.", "C. Every 6 months.", "D. Annually."],
        correctAnswer: "B. Every 3 months."
    },
    {
        question: "How often must the total operation of a recirculating system be inspected and tested by qualified service personnel?",
        options: ["A. Quarterly.", "B. Every 6 months.", "C. Annually.", "D. Bi-annually."],
        correctAnswer: "B. Every 6 months."
    },
    {
        question: "A critical safety component in a recirculating system is a listed fire damper. Where is this damper typically required to be installed to prevent fire spread?",
        options: ["A. At the entrance to the exhaust hood.", "B. Within the return air plenum directly before the supply fan.", "C. On the discharge side of the recirculating system before re-entry into the conditioned space.", "D. Immediately upstream of the grease removal devices."],
        correctAnswer: "C. On the discharge side of the recirculating system before re-entry into the conditioned space."
    },
    {
        question: "In non-listed assemblies, at what minimum angle from the horizontal must grease filters be installed, and which type of filter is explicitly prohibited unless part of a listed device?",
        options: ["A. 30 degrees, activated carbon filters.", "B. 45 degrees, mesh filters.", "C. 60 degrees, baffle filters.", "D. 90 degrees, cartridge filters."],
        correctAnswer: "B. 45 degrees, mesh filters."
    },
    {
        question: "An exhaust duct serving a Type I hood passes through a concealed combustible space. Assuming no listed clearance reduction system is used, what is the minimum required clearance to these combustible materials?",
        options: ["A. 6 inches (152 mm).", "B. 12 inches (305 mm).", "C. 18 inches (457 mm).", "D. 36 inches (914 mm)."],
        correctAnswer: "C. 18 inches (457 mm)."
    },
    {
        question: "To ensure a grease-tight seal and maintain structural integrity, how must sections of commercial kitchen exhaust ductwork be joined together?",
        options: ["A. With approved high-temperature sealant and sheet metal screws.", "B. Using interlocking snap-lock connections with exterior caulk.", "C. By continuous liquid-tight external welds.", "D. With flanged connections secured by gaskets and bolts."],
        correctAnswer: "C. By continuous liquid-tight external welds."
    },
    {
        question: "What is the minimum distance required between the edge of an access panel opening and any other opening or welded seam in a horizontal, non-listed exhaust duct?",
        options: ["A. 1.0 inch.", "B. 1.5 inches.", "C. 2.0 inches.", "D. 3.0 inches."],
        correctAnswer: "B. 1.5 inches."
    },
    {
        question: "Before commencing work on an exhaust fan or associated electrical equipment, a technician must implement a Lockout/Tagout (LOTO) procedure. What is the primary objective of this procedure?",
        options: ["A. To prevent unauthorized personnel from entering the work area.", "B. To ensure all cleaning chemicals are properly secured.", "C. To prevent the unexpected startup or release of stored energy from equipment.", "D. To document the duration of the maintenance activity."],
        correctAnswer: "C. To prevent the unexpected startup or release of stored energy from equipment."
    },
    {
        question: "When cleaning an exhaust system on a sloped roof, at what minimum height from a lower level are fall protection systems generally required, according to OSHA general industry standards?",
        options: ["A. 4 feet (1.2 meters).", "B. 6 feet (1.8 meters).", "C. 10 feet (3.0 meters).", "D. Any height if the slope exceeds 4:12 pitch."],
        correctAnswer: "B. 6 feet (1.8 meters)."
    },
    {
        question: "What is the most critical step a technician must take concerning ladder safety before each use?",
        options: ["A. Ensure the ladder is clean and free of grease.", "B. Confirm the ladder's duty rating meets the expected load.", "C. Conduct a thorough visual and functional inspection for defects or damage.", "D. Verify the ladder's length is appropriate for the task."],
        correctAnswer: "C. Conduct a thorough visual and functional inspection for defects or damage."
    },
    {
        question: "A technician is preparing to clean a duct system using strong alkaline chemicals in an area with limited airflow. What is the most immediate and severe safety risk in this scenario without proper ventilation and PPE?",
        options: ["A. Skin irritation from accidental chemical contact.", "B. Environmental contamination from chemical spills.", "C. Respiratory distress or asphyxiation due to inadequate ventilation and chemical fumes.", "D. Long-term corrosion damage to the ductwork."],
        correctAnswer: "C. Respiratory distress or asphyxiation due to inadequate ventilation and chemical fumes."
    },
    {
        question: "According to IKECA and NFPA 96 guidelines, a grease depth measurement of 2000 micrometers (0.078 inches) observed in the ductwork signifies what?",
        options: ["A. The system is within acceptable limits for continued operation for another quarter.", "B. The system requires immediate replacement of the affected duct section.", "C. The surfaces shall be cleaned in accordance with established standards.", "D. Only a visual inspection is required, with cleaning deferred until the next scheduled visit."],
        correctAnswer: "C. The surfaces shall be cleaned in accordance with established standards."
    },
    {
        question: "After the cleaning of a kitchen exhaust system is completed, what is the maximum acceptable grease comb measurement on a cleaned surface?",
        options: ["A. 0 micrometers.", "B. 50 micrometers.", "C. 100 micrometers.", "D. 2000 micrometers."],
        correctAnswer: "B. 50 micrometers."
    },
    {
        question: "When a portion of a kitchen exhaust system is inaccessible or could not be cleaned during service, what specific information must be included in the written service report provided to the system owner?",
        options: ["A. An estimated cost for cleaning the uncleaned sections in the future.", "B. A disclaimer absolving the cleaning company of liability for uncleaned sections.", "C. Specification of inaccessible or uncleaned areas.", "D. A recommendation for the owner to clean the areas themselves."],
        correctAnswer: "C. Specification of inaccessible or uncleaned areas."
    },
    {
        question: "Upon completion of cleaning and before leaving the site, what critical functional check must be performed by the technician to ensure system operation?",
        options: ["A. Recalibrating the cooking appliances in the kitchen.", "B. Verifying that the exhaust fan operates correctly.", "C. Measuring the static pressure within the ductwork.", "D. Applying a post-cleaning sealant to all access panel seams."],
        correctAnswer: "B. Verifying that the exhaust fan operates correctly."
    },
    {
        question: "Why do solid fuel cooking operations typically require a dedicated, separate exhaust system from other kitchen exhaust systems?",
        options: ["A. To optimize energy efficiency and reduce heat loss.", "B. To prevent cross-contamination of food flavors.", "C. Due to the unique nature of their effluent, including higher concentrations of creosote and potential for sparks.", "D. To allow for easier independent maintenance scheduling."],
        correctAnswer: "C. Due to the unique nature of their effluent, including higher concentrations of creosote and potential for sparks."
    },
    {
        question: "In solid fuel cooking operations, what is the primary purpose of a spark arrester in the exhaust system?",
        options: ["A. To enhance airflow for better combustion efficiency.", "B. To capture airborne grease particles before they enter the duct.", "C. To minimize the passage of airborne sparks and embers into the plenum, duct, and flue.", "D. To reduce noise generated by the exhaust fan."],
        correctAnswer: "C. To minimize the passage of airborne sparks and embers into the plenum, duct, and flue."
    },
    {
        question: "When storing cleaning chemicals for kitchen exhaust systems, what is a critical safety and environmental guideline to follow?",
        options: ["A. Chemicals should be stored in clear containers to allow for easy identification.", "B. It is permissible to store chemicals on the floor near drains for easy disposal.", "C. Store in original, properly labeled, leak-proof containers, away from incompatible materials, heat, and ignition sources.", "D. Chemicals can be stored with food products if separated by a non-porous barrier."],
        correctAnswer: "C. Store in original, properly labeled, leak-proof containers, away from incompatible materials, heat, and ignition sources."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

const questionEl = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const submitBtn = document.getElementById('submit-btn');
const feedbackEl = document.getElementById('feedback');
const quizContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const scoreSpan = document.getElementById('score');
const totalQuestionsSpan = document.getElementById('total-questions');
const restartBtn = document.getElementById('restart-btn');

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // ES6 swap
    }
}


function loadQuestion() {
    selectedAnswer = null; // Reset selected answer for new question
    feedbackEl.textContent = ''; // Clear previous feedback
    feedbackEl.className = ''; // Clear feedback classes
    submitBtn.disabled = true; // Disable submit until an option is selected

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionEl.textContent = currentQuestion.question;
        optionsContainer.innerHTML = ''; // Clear previous options

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn'); // Add a class for styling/selection
            button.addEventListener('click', () => selectOption(button, option));
            optionsContainer.appendChild(button);
        });
    } else {
        showResults();
    }
}

function selectOption(button, option) {
    // Remove 'selected' class from all options
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Add 'selected' class to the clicked button
    button.classList.add('selected');
    selectedAnswer = option;
    submitBtn.disabled = false; // Enable submit button
}

function submitAnswer() {
    if (selectedAnswer === null) {
        alert("Please select an answer!");
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.option-btn');

    // Disable all option buttons and submit button after submission
    optionButtons.forEach(btn => btn.disabled = true);
    submitBtn.disabled = true;

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        feedbackEl.textContent = "Correct!";
        feedbackEl.classList.add('correct-feedback');
        // Highlight correct answer in green
        optionButtons.forEach(btn => {
            if (btn.textContent === currentQuestion.correctAnswer) {
                btn.classList.add('correct');
            }
        });
    } else {
        feedbackEl.textContent = `Incorrect. The correct answer was: ${currentQuestion.correctAnswer}`;
        feedbackEl.classList.add('incorrect-feedback');
        // Highlight selected incorrect answer in red and correct answer in green
        optionButtons.forEach(btn => {
            if (btn.textContent === selectedAnswer) {
                btn.classList.add('incorrect');
            }
            if (btn.textContent === currentQuestion.correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }

    // Move to the next question after a brief delay
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000); // 2-second delay
}

function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    scoreSpan.textContent = score;
    totalQuestionsSpan.textContent = questions.length;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    shuffleArray(questions); // Re-shuffle questions for a new attempt
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    loadQuestion();
}

// Event Listeners
submitBtn.addEventListener('click', submitAnswer);
restartBtn.addEventListener('click', restartQuiz);

// Initial load
shuffleArray(questions); // Shuffle questions on initial load
loadQuestion();
