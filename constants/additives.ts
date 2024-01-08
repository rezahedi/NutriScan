import { AdditiveProps } from "@/types";

export const messages: string[] =
[
  "No hazardous substances",     // without any additives
  "No risky additives",          // with additives
  "An additive to avoid",        // with one moderate additive
  "Contains additives to avoid", // with multiple moderate additives
  "A risky additive",            // with one hazardous additive
  "Contains risky additives",    // with multiple hazardous additives
];

export const riskTitles: string[] =
[
  "No Risk",
  "Limited Risk",
  "Moderate Risk",
  "Hazardous",
];

export const additivesList: AdditiveProps[] =
[
  {
    number: "E100",
    name: "Curcumin",
    risk: 2,
    description: "Naturally occurring orange/yellow colour\r\nExtracted from the spice turmeric",
    use: "Used in pastries, confectionery, sauces, and soups"
  },
  {
    number: "E101",
    name: "Riboflavin or lactoflavin (Vitamin B2)",
    risk: 0,
    description: "Naturally occurring B-group vitamin\r\nUsually obtained from yeast or produced synthetically",
    use: "Enrichment and fortification of food\r\nAdded to processed cheese as yellow/orange colour"
  },
  {
    number: "E102",
    name: "Tartrazine",
    risk: 3,
    description: "Widely used yellow/orange colour",
    use: "Found in soft drinks, cakes, biscuits, puddings, meat products, sauces, tinned and packet convenience foods and confectionery"
  },
  {
    number: "E103",
    name: "Alkanet or Alkannin",
    risk: 2,
    description: "",
    use: ""
  },
  {
    number: "E104",
    name: "Quinoline Yellow",
    risk: 3,
    description: "A synthetic coal tar dye, greenish yellow in colour",
    use: "Used with other yellow colours, especially in smoked fish"
  },
  {
    number: "E110",
    name: "Sunset Yellow FCF; Orange Yellow S",
    risk: 3,
    description: "A synthetic coal tar dye, yellow in colour, used with E102",
    use: "Found in soft drinks, cakes, biscuits, puddings, meat products, sauces, tinned and packet convenience foods and confectionery"
  },
  {
    number: "E120",
    name: "Cochineal; Carminic acid; Carmines",
    risk: 2,
    description: "Natural red colour obtained from egg yolk and dried insects\r\nCan be manufactured",
    use: "Red colour in foods"
  },
  {
    number: "E122",
    name: "Azorubine; Carmoisine",
    risk: 3,
    description: "A synthetic coal tar dye, red/purple in colour",
    use: "Often added to raspberry and chocolate flavoured desserts, marzipan, jam, cherryade, bottled sauce, and breaded products"
  },
  {
    number: "E123",
    name: "Amaranth",
    risk: 3,
    description: "A synthetic coal tar dye, red in colour",
    use: "Sometimes used in gravy mixes, meat patties, and blackcurrant drinks"
  },
  {
    number: "E124",
    name: "Ponceau 4R; Cochineal Red A",
    risk: 3,
    description: "A synthetic coal tar dye, red in colour",
    use: "Often used to restore red colour to tinned strawberries"
  },
  {
    number: "E127",
    name: "Erythrosine",
    risk: 3,
    description: "A synthetic coal tar dye, red in colour\r\nRich in mineral iodine",
    use: "Regular component of glace cherries, peach melba yogurt, vacuum-packed ham and pork, tinned strawberries, and certain flavours of chips and potato-based snacks"
  },
  {
    number: "E128",
    name: "Red 2G",
    risk: 0,
    description: "A synthetic coal tar dye, red in colour",
    use: "Now banned in many countries including the EU and USA"
  },
  {
    number: "E129",
    name: "Allura Red AC",
    risk: 3,
    description: "Colouring agent",
    use: "Used in drinks, baked goods, meat products, and sweets"
  },
  {
    number: "E131",
    name: "Patent Blue V",
    risk: 0,
    description: "Colouring agent",
    use: "Used in some meat products"
  },
  {
    number: "E132",
    name: "lndigotine; Indigo Carmine",
    risk: 3,
    description: "A synthetic coal tar dye, blue in colour",
    use: "Added to gravy mix and certain meat products"
  },
  {
    number: "E133",
    name: "Brilliant Blue FCF",
    risk: 3,
    description: "A synthetic coal tar dye, blue in colour\r\nOften mixed with E102 to make green",
    use: "Bacon flavoured snacks"
  },
  {
    number: "E140",
    name: "Chlorophyll and chlorophyllins",
    risk: 2,
    description: "Naturally occurring green pigment found plant leaves and stems\r\nAlso manufactured",
    use: "Added to green vegetables to enhance their colour"
  },
  {
    number: "E141",
    name: "Copper complexes of chlorophyll and chlorophyllins",
    risk: 2,
    description: "A more stable colour obtained by a reaction between copper and manufactured chlorophyll",
    use: "Used to heighten the green colour of products such as cucumber relish"
  },
  {
    number: "E142",
    name: "Green S",
    risk: 3,
    description: "A synthetic coal tar dye, green in colour",
    use: "Used to restore the expected green colour to tinned peas\r\nAlso added to asparagus soup, lemon or lime drinks and jellies, and mint sauce"
  },
  {
    number: "E143",
    name: "Fast green FCF",
    risk: 3,
    description: "",
    use: ""
  },
  {
    number: "E150a",
    name: "Plain caramel",
    risk: 0,
    description: "Commonly used brown colour and flavouring agent made from the caramelisation or burning of sugar by heat or chemicals\r\nNo ammonium or sulphite reactants",
    use: "Used in soft drinks, gravy mix, brown bread, cakes, biscuits, malt vinegar, marmalade, and beef products"
  },
  {
    number: "E150b",
    name: "Caustic sulphite caramel",
    risk: 0,
    description: "Colouring agent\r\nWith sulphite reactant, but no ammonium",
    use: "Used in tea, whiskey, and brandy"
  },
  {
    number: "E150c",
    name: "Ammonia caramel",
    risk: 0,
    description: "Colouring agent\r\nWith ammonium reactant, but no sulphite",
    use: "Used to colour soy sauce and beer"
  },
  {
    number: "E150d",
    name: "Sulphite ammonia caramel",
    risk: 0,
    description: "Colouring agent\r\nWith both sulphite and ammonia reactants",
    use: "Widely used for soft drinks"
  },
  {
    number: "E151",
    name: "Brilliant Black BN; Black PN",
    risk: 3,
    description: "A synthetic coal tar dye, black in colour",
    use: "Used to darken fruit sauces"
  },
  {
    number: "E153",
    name: "Vegetable carbon",
    risk: 0,
    description: "Natural black colour obtained from burnt plant material, now often manufactured",
    use: "Added to concentrated fruit juices, preserves, and jellies"
  },
  {
    number: "E155",
    name: "Brown HT",
    risk: 3,
    description: "A synthetic coal tar dye, brown in colour",
    use: "Various foods"
  },
  {
    number: "E160",
    name: "Carotenoids",
    risk: 0,
    description: "Plant pigments derived from carrots, tomatoes, apricots, oranges, rosehip and green leafy vegetables\r\nNow mostly manufactured",
    use: "Provide a range of colours from yellow to red"
  },
  {
    number: "E160a",
    name: "Alpha-, beta, and gamma-carotenes",
    risk: 0,
    description: "Beta-carotene is a well-known substance that is converted by the body to Vitamin A\r\nOrange in colour",
    use: "Added to biscuits, cakes, margarine, creamed rice, cheese products, and certain soups"
  },
  {
    number: "E160b",
    name: "Annatto",
    risk: 3,
    description: "Orange/peach pigment naturally present in butter and cheese",
    use: "Used to give creamy colour to creamed rice, coffee creamer, pastry, cheese, and cheese products"
  },
  {
    number: "E160c",
    name: "Paprika extract; Capsanthian; Capsorubin",
    risk: 2,
    description: "Colouring agent (red)",
    use: "Can be used to add colour and flavour to various food products"
  },
  {
    number: "E160d",
    name: "Lycopene",
    risk: 2,
    description: "Colouring agent (red)\r\nCarotenoid",
    use: "May be used in processed foods, beverages, and ketchup"
  },
  {
    number: "E160e",
    name: "Beta-apo-8'-carotenal (C30); apocarotenal",
    risk: 0,
    description: "Colouring agent (orange/red)\r\nCarotenoid",
    use: "Sometimes used in processed cheese"
  },
  {
    number: "E161a",
    name: "Flavoxanthin",
    risk: 2,
    description: "",
    use: ""
  },
  {
    number: "E161b",
    name: "Lutein",
    risk: 2,
    description: "Colouring agent (yellow/orange)\r\nCarotenoid",
    use: "Has been used as a chicken feed additive to promote yellow colouring of egg yolks"
  },
  {
    number: "E161c",
    name: "Kryptoxanthin",
    risk: 2,
    description: "",
    use: ""
  },
  {
    number: "E161d",
    name: "Rubixanthin",
    risk: 2,
    description: "",
    use: ""
  },
  {
    number: "E161e",
    name: "Violoxanthin",
    risk: 2,
    description: "",
    use: ""
  },
  {
    number: "E161f",
    name: "Rhodoxanthin",
    risk: 2,
    description: "",
    use: ""
  },
  {
    number: "E161g",
    name: "Canthaxanthin",
    risk: 2,
    description: "Colouring agent (reddish/orange)\r\nCarotenoid",
    use: "May be present in food and self-tanning products"
  },
  {
    number: "E162",
    name: "Betanin (Beetroot Red)",
    risk: 2,
    description: "Naturally occurring red/purple colour in beetroots",
    use: "May be added to oxtail soup"
  },
  {
    number: "E163",
    name: "Anthocyanins",
    risk: 2,
    description: "Plant pigments with colours ranging from red to blue\r\nNaturally present in red cabbage and grapes",
    use: "Used in producing purple-colored beverages, confectionaries, and jams"
  },
  {
    number: "E164",
    name: "Saffron or crocetin or crocin",
    risk: 2,
    description: "",
    use: ""
  },
  {
    number: "E170",
    name: "Calcium carbonate (chalk)",
    risk: 0,
    description: "Naturally occurring mineral",
    use: "Various functions including acid regulator, firming agent, releasing agent, and nutrient\r\nAdded to white flour as a calcium supplement to replace the loss due to refining\r\nFrequently an ingredient in bread and baked products"
  },
  {
    number: "E171",
    name: "Titanium dioxide",
    risk: 2,
    description: "Colouring agent",
    use: "Use no longer permitted in the EU and in Northern Ireland as of Feb 2022"
  },
  {
    number: "E172",
    name: "Iron oxides and hydroxides",
    risk: 0,
    description: "Naturally occurring mineral",
    use: "Added to fortify food"
  },
  {
    number: "E173",
    name: "Aluminium",
    risk: 0,
    description: "Colouring agent (silver/grey)",
    use: "Surface coating (eg, for cake decoration or confectionary)"
  },
  {
    number: "E174",
    name: "Silver",
    risk: 0,
    description: "Colouring agent",
    use: "May be used for silver surface coating"
  },
  {
    number: "E175",
    name: "Gold",
    risk: 0,
    description: "Colouring agent",
    use: "May be used for gold surface coating"
  },
  {
    number: "E180",
    name: "Lithol rubine BK",
    risk: 0,
    description: "Colouring agent (red)",
    use: "Used for colouring cheese rind"
  },
  {
    number: "E181",
    name: "Tannic acid or tannins",
    risk: 2,
    description: "",
    use: ""
  },
  {
    number: "E200",
    name: "Sorbic acid",
    risk: 3,
    description: "Naturally occurring in some fruit but generally manufactured synthetically for use as a food preservative",
    use: "Commonly added to soft drinks, cheese spread, frozen pizza, and cakes"
  },
  {
    number: "E201",
    name: "Sodium sorbate",
    risk: 3,
    description: "",
    use: ""
  },
  {
    number: "E202",
    name: "Potassium sorbate",
    risk: 3,
    description: "Salt of sorbic acid",
    use: "Used to preserve glace cherries"
  },
  {
    number: "E203",
    name: "Calcium sorbate",
    risk: 3,
    description: "",
    use: ""
  },
  {
    number: "E210",
    name: "Benzoic acid",
    risk: 3,
    description: "Occurs naturally in cherry bark, raspberries, tea, anise, and cassia bark, but largely prepared synthetically for commercial use",
    use: "Acts as a preservative and antioxidant most frequently in fruit products, soft drinks, pickled produce, and salad dressings"
  },
  {
    number: "E211",
    name: "Sodium benzoate",
    risk: 3,
    description: "Salt of benzoic acid",
    use: "In bottled sauces"
  },
  {
    number: "E212",
    name: "Potassium benzoate",
    risk: 3,
    description: "Salt of benzoic acid",
    use: "As per benzoic acid (E210)"
  },
  {
    number: "E213",
    name: "Calcium benzoate",
    risk: 3,
    description: "Salt of benzoic acid",
    use: "As per benzoic acid (E210)"
  },
  {
    number: "E214",
    name: "Ethyl p-hydroxybenzoate",
    risk: 0,
    description: "Preservative\r\nSalt of benzoic acid",
    use: "As per benzoic acid (E210)"
  },
  {
    number: "E215",
    name: "Sodium ethyl p-hydroxybenzoate",
    risk: 0,
    description: "Preservative\r\nSalt of benzoic acid",
    use: "As per benzoic acid (E210)"
  },
  {
    number: "E216",
    name: "Propylparaben or Propyl-p-hydroxy-benzoate",
    risk: 2,
    description: "",
    use: ""
  },
  {
    number: "E218",
    name: "Methyl p-hydroxybenzoate",
    risk: 2,
    description: "Preservative\r\nSalt of benzoic acid",
    use: "As per benzoic acid (E210)"
  },
  {
    number: "E219",
    name: "Sodium methyl p-hydroxybenzoate",
    risk: 0,
    description: "Preservative\r\nSalt of benzoic acid",
    use: "As per benzoic acid (E210)"
  },
  {
    number: "E220",
    name: "Sulfur dioxide",
    risk: 3,
    description: "Gas prepared chemically for use as a food preservative, flour improver, bleaching agent, and Vitamin C stabiliser",
    use: "Found in carbonated drinks, marmalade, glace cherries, mixed peel, cakes, fruit based products, and meat products"
  },
  {
    number: "E221",
    name: "Sodium sulphite",
    risk: 3,
    description: "Preservative",
    use: "May be used to prevent discolouration in dried fruit"
  },
  {
    number: "E222",
    name: "Sodium hydrogen sulphite",
    risk: 3,
    description: "Synthetic preservative and bleaching agent",
    use: "Often added to wine and beer"
  },
  {
    number: "E223",
    name: "Sodium metabisulphite",
    risk: 3,
    description: "Synthetic preservative",
    use: "Added to sausages and some bottled sauces"
  },
  {
    number: "E224",
    name: "Potassium metabisulphite",
    risk: 3,
    description: "Preservative",
    use: "Sometimes used to preserve beer, wine, and other fermented beverages"
  },
  {
    number: "E225",
    name: "Potassium sulphite",
    risk: 3,
    description: "",
    use: ""
  },
  {
    number: "E226",
    name: "Calcium sulphite",
    risk: 0,
    description: "Preservative",
    use: "Banned in Australia"
  },
  {
    number: "E227",
    name: "Calcium hydrogen sulphite",
    risk: 0,
    description: "Preservative",
    use: "May be used in canned fruit and beer products"
  },
  {
    number: "E228",
    name: "Potassium hydrogen sulphite",
    risk: 3,
    description: "Preservative",
    use: "May be used in alcoholic beverages"
  },
  {
    number: "E234",
    name: "Nisin",
    risk: 2,
    description: "Preservative",
    use: "Cheese and dairy products"
  },
  {
    number: "E235",
    name: "Natamycin",
    risk: 2,
    description: "Preservative",
    use: "Cheese and sausages"
  },
  {
    number: "E239",
    name: "Hexamethylene tetramine",
    risk: 0,
    description: "Preservative",
    use: "Cheese and fish products"
  },
  {
    number: "E242",
    name: "Dimethyl dicarbonate",
    risk: 0,
    description: "Preservative",
    use: "Beverages"
  },
  {
    number: "E243",
    name: "Ethyl lauroyl arginate",
    risk: 0,
    description: "Preservative",
    use: "Heat-treated meat products"
  },
  {
    number: "E249",
    name: "Potassium nitrite",
    risk: 3,
    description: "Naturally occurring mineral used as a preservative and colour fixative",
    use: "Used in cooked meats, sausages, and cured meats"
  },
  {
    number: "E250",
    name: "Sodium nitrite",
    risk: 3,
    description: "Derived from sodium nitrate by chemical or bacterial action\r\nActs as a preservative and colour fixative",
    use: "Added to cooked and cured meats, bacon, and pork sausages"
  },
  {
    number: "E251",
    name: "Sodium nitrate",
    risk: 3,
    description: "Naturally occurring mineral, usually manufactured synthetically for use as a food preservative and colour fixative",
    use: "In cooked meats, bacon, ham, and cheese"
  },
  {
    number: "E252",
    name: "Potassium nitrate",
    risk: 3,
    description: "Naturally occurring but more usually produced artificially from animal waste and vegetable material\r\nOne of the oldest and most effective preservatives for meat\r\nAlso acts as a curing agent",
    use: "Found in cured and cooked meats, and sausages"
  },
  {
    number: "E280",
    name: "Propionic acid",
    risk: 3,
    description: "Fatty acid produced by animals in the process of digestion, but generally manufactured synthetically",
    use: "Added to baked goods\r\nFunctions as a preservative"
  },
  {
    number: "E281",
    name: "Sodium propionate",
    risk: 3,
    description: "Salt of propionic acid",
    use: "Added to baked goods"
  },
  {
    number: "E282",
    name: "Calcium propionate",
    risk: 3,
    description: "Salt of propionic acid\r\nFound naturally in Swiss cheese",
    use: "Added to baked goods"
  },
  {
    number: "E283",
    name: "Potassium propionate",
    risk: 3,
    description: "Salt of propionic acid",
    use: "Added to baked goods"
  },
  {
    number: "E284",
    name: "Boric acid",
    risk: 0,
    description: "Preservative and acidity regulator",
    use: "Sometimes used in meat, fish, and dairy products\r\nOther uses include antiseptic and insecticide"
  },
  {
    number: "E285",
    name: "Sodium tetraborate; borax",
    risk: 0,
    description: "Preservative\r\nSodium salt of boric acid (see E284)",
    use: "Sometimes used as caviar preservative\r\nBanned in some countries including the United States"
  },
  {
    number: "E1105",
    name: "Lysozyme",
    risk: 0,
    description: "Preservative\r\nNatural enzyme found in tears, saliva, blood, sweat, and breast milk\r\nCommercially purified from egg whites",
    use: "Infant nutrition products\r\nCheese products"
  },
  {
    number: "E300",
    name: "Ascorbic acid (Vitamin C)",
    risk: 0,
    description: "Occurs naturally in fruit and vegetables but is synthesised biologically\r\nActs as a preservative, anti-oxidant, meat colour fixative, and flour improver\r\nAlso a vitamin",
    use: "Found in fruit juices, bread, baked products, powdered mashed potatoes, and other products"
  },
  {
    number: "E301",
    name: "Sodium ascorbate",
    risk: 0,
    description: "Salt of ascorbic acid",
    use: "Added to cured meats"
  },
  {
    number: "E302",
    name: "Calcium ascorbate",
    risk: 0,
    description: "Salt of ascorbic acid",
    use: "Similar function to ascorbic acid (E300)"
  },
  {
    number: "E304",
    name: "Fatty acid esters of ascorbic acid",
    risk: 0,
    description: "Salt of ascorbic acid",
    use: "Used in sausage and cured meats"
  },
  {
    number: "E306",
    name: "Tocopherol (Vitamin E)",
    risk: 0,
    description: "Obtained from soya bean oil, wheatgerm, rice germ, cottonseed, maize, and green leaves\r\nUsed as an antioxidant and nutrient",
    use: "Added to fats and oils"
  },
  {
    number: "E307",
    name: "Alpha-tocopherol",
    risk: 0,
    description: "Synthetic products of tocopherol with similar functions (see E306)",
    use: "Added to fats and oils"
  },
  {
    number: "E308",
    name: "Gamma-tocopherol",
    risk: 0,
    description: "Synthetic products of tocopherol with similar functions (see E306)",
    use: "Added to fats and oils"
  },
  {
    number: "E309",
    name: "Delta-tocopherol",
    risk: 0,
    description: "Synthetic products of tocopherol with similar functions (see E306)",
    use: "Added to fats and oils"
  },
  {
    number: "E310",
    name: "Propyl gallate",
    risk: 3,
    description: "Synthetically prepared antioxidant",
    use: "Added to fats and oils\r\nFound in fried foods\r\nMay give rise to a bitter taste"
  },
  {
    number: "E311",
    name: "Octyl gallate",
    risk: 3,
    description: "",
    use: ""
  },
  {
    number: "E312",
    name: "Dodecyl gallate",
    risk: 3,
    description: "",
    use: ""
  },
  {
    number: "E315",
    name: "Erythorbic acid",
    risk: 0,
    description: "Antioxidant",
    use: "Processed meat and fish products"
  },
  {
    number: "E316",
    name: "Sodium erythorbate",
    risk: 0,
    description: "Antioxidant",
    use: "Meat products"
  },
  {
    number: "E319",
    name: "Tertiary-butyl hydroquinone (TBHQ)",
    risk: 3,
    description: "Antioxidant",
    use: "Fats and oils"
  },
  {
    number: "E320",
    name: "Butylated hydroxyanisole (BHA)",
    risk: 3,
    description: "Antioxidant manufactured synthetically for use alone or with E280, E310, or E330",
    use: "Often found in chips and other potato snacks, biscuits, pastry, bottled sauces, and fried foods"
  },
  {
    number: "E321",
    name: "Butylated hydroxytoluene (BHT)",
    risk: 3,
    description: "Synthetically prepared antioxidant",
    use: "Similar to butylated hydroxyanisole (E320)"
  },
  {
    number: "E392",
    name: "Extracts of rosemary",
    risk: 2,
    description: "Antioxidant",
    use: "Fat-based spreads"
  },
  {
    number: "E586",
    name: "4-Hexylresorcinol",
    risk: 0,
    description: "Antioxidant",
    use: "Shrimps and crustaceans"
  },
  {
    number: "E420",
    name: "Sorbitol",
    risk: 0,
    description: "Sugar alcohol produced from glucose\r\nLess quickly absorbed than sugar so often used as a sweetener\r\nAlso used as a humectant and food colour diluent\r\nMay have a laxative effect in large doses",
    use: "Widely used in diabetic confectionery, preserves, biscuits, cakes, and soft drinks"
  },
  {
    number: "E421",
    name: "Mannitol",
    risk: 0,
    description: "Sugar alcohol derived from mannose, but general manufactured from seaweed\r\nActs as a sweetener, emulsifier, anti-caking agent, and thickener",
    use: "Used in confectionery and desserts"
  },
  {
    number: "E950",
    name: "Acesulfame K",
    risk: 2,
    description: "Sweetener",
    use: "Low-calorie sweetener used in various food and drinks"
  },
  {
    number: "E951",
    name: "Aspartame",
    risk: 2,
    description: "New artificial sweetener of protein origin\r\nContains phenylalanine",
    use: "Artificial sweeteners, confectionery, ice cream, low calorie desserts, and soft drinks"
  },
  {
    number: "E952",
    name: "Cyclamic acid and its Na and Ca salts",
    risk: 2,
    description: "Artificial sweetener",
    use: ""
  },
  {
    number: "E953",
    name: "lsomalt",
    risk: 0,
    description: "Sweetener\r\nHigh temperature stability",
    use: "Used as a sweetener in heat-treated products eg, bakery products"
  },
  {
    number: "E954",
    name: "Saccharin and its Na, K, and Ca salts",
    risk: 2,
    description: "Calorie-free artificial sweetener",
    use: "Low calorie products, soft drinks, and confectionery"
  },
  {
    number: "E955",
    name: "Sucralose",
    risk: 2,
    description: "Sweetener",
    use: "Candy, breakfast bars, soft drinks, canned fruits"
  },
  {
    number: "E956",
    name: "Alitame",
    risk: 2,
    description: "",
    use: ""
  },
  {
    number: "E957",
    name: "Thaumatin",
    risk: 0,
    description: "Sweetener\r\nNatural plant protein",
    use: "May be used in beverages, dairy products, or chewing gum"
  },
  {
    number: "E959",
    name: "Neohesperidine DC",
    risk: 0,
    description: "Sweetener\r\nDerived from citrus",
    use: "Widely used in desserts, dairy products, confectionary, and beverages"
  },
  {
    number: "E960",
    name: "Steviol glycoside",
    risk: 0,
    description: "Sweetener",
    use: "Widely used in carbonated soft drinks, juice, tea, desserts, dairy products, confectionary, and other products"
  },
  {
    number: "E961",
    name: "Neotame",
    risk: 2,
    description: "Sweetener, similar to aspartame (E951)",
    use: "Widely used (see E951)"
  },
  {
    number: "E962",
    name: "Salt of aspartame-acesulfame",
    risk: 2,
    description: "Low-calorie sweetener",
    use: ""
  },
  {
    number: "E964",
    name: "Polyglycitol syrup",
    risk: 0,
    description: "Sweetener",
    use: ""
  },
  {
    number: "E965",
    name: "Maltitol",
    risk: 0,
    description: "Naturally occurring sugar in grapes and corn",
    use: "Confectionery, cakes, biscuits, puddings, desserts, soft drinks, convenience foods"
  },
  {
    number: "E966",
    name: "Lactitol",
    risk: 0,
    description: "Synthetic sweetener\r\nDerived from lactose",
    use: "Replacement bulk sweetener for low-calorie foods"
  },
  {
    number: "E967",
    name: "Xylitol",
    risk: 0,
    description: "Sweetener",
    use: "Widely used as sugar substitute eg, confectionary, sweet sauces, liqueurs, jams, desserts"
  },
  {
    number: "E968",
    name: "Erythritol",
    risk: 0,
    description: "Sweetener\r\nMade from carbohydrate fermentation",
    use: ""
  },
  {
    number: "E969",
    name: "Advantame",
    risk: 2,
    description: "Sweetener",
    use: "Tabletop sweetener, confectionary, bubblegum, flavoured drinks, and other products"
  },
  {
    number: "E322",
    name: "Lecithins",
    risk: 0,
    description: "Type of fat or lipid compound found naturally in all living organisms, protective against cholesterol deposition\r\nEgg yolk is a rich source of lecithins, but commercially, most is obtained from soya beans\r\nUsed as an antioxidant and emulsifier",
    use: "Found in chocolate and chocolate products, powdered milk, margarine, and potato snacks"
  },
  {
    number: "E400",
    name: "Alginic acid",
    risk: 0,
    description: "Emulsifier, stabiliser, gelling agent, and thickener extracted from brown seaweed",
    use: "Frequently added to ice cream, instant desserts, and puddings"
  },
  {
    number: "E401",
    name: "Sodium alginate",
    risk: 0,
    description: "Salt of alginic acid with similar functions (see E400)",
    use: "See E400 (alginic acid)"
  },
  {
    number: "E402",
    name: "Potassium alginate",
    risk: 0,
    description: "Salt of alginic acid with similar functions (see E400)",
    use: "See E400 (alginic acid)"
  },
  {
    number: "E403",
    name: "Ammonium alginate",
    risk: 0,
    description: "Salt of alginic acid with similar functions (see E400)",
    use: "See E400 (alginic acid)"
  },
  {
    number: "E404",
    name: "Calcium alginate",
    risk: 0,
    description: "Salt of alginic acid with similar functions (see E400)",
    use: "See E400 (alginic acid)"
  },
  {
    number: "E405",
    name: "Propane-1,2-diol alginate; propylene glycol alginate (PGA)",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent\r\nEster made from alginic acid (E400) and propylene glycol (E1520)",
    use: ""
  },
  {
    number: "E406",
    name: "Agar",
    risk: 0,
    description: "Naturally occurring gum extracted from seaweeds\r\nNot digested so acts a source of dietary fibre\r\nAlso acts as a stabiliser and gelling agent",
    use: "Used in tinned ham, meat glazes, and in ice cream"
  },
  {
    number: "E407",
    name: "Carrageenan (Irish moss)",
    risk: 2,
    description: "Gum naturally present in red seaweed\r\nUsed as an emulsifier, stabiliser, and gelling agent",
    use: "Found in ice cream"
  },
  {
    number: "E407a",
    name: "Processed eucheuma seaweed",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E410",
    name: "Locust bean gum; carob gum",
    risk: 0,
    description: "Natural extract from the Carob tree seed\r\nSimilar to E407",
    use: "Added to ice cream, and soups\r\nCarob is a non-caffeine containing substitute for cocoa and chocolate\r\nUsed in beverages, confectionery, and baked products"
  },
  {
    number: "E412",
    name: "Guar gum (cluster bean gum)",
    risk: 0,
    description: "Naturally occurring seed gum from a tree of the pea family\r\nUsed as a thickener and stabiliser",
    use: "Added to bottled sauces, soup, ice cream, and frozen desserts"
  },
  {
    number: "E413",
    name: "Tragacanth",
    risk: 0,
    description: "Natural gum obtained from a tree of the pea family\r\nUsed as a stabiliser, emulsifier, and thickener\r\nUsed to prevent crystallisation of sugar",
    use: "Similar to E412 and in confectionery"
  },
  {
    number: "E414",
    name: "Acacia gum; gum arabic",
    risk: 0,
    description: "Similar to E413",
    use: "Similar to E413"
  },
  {
    number: "E415",
    name: "Xanthan gum",
    risk: 0,
    description: "Made from fermentation of carbohydrates by bacteria\r\nUsed as an emulsifier, stabiliser, and thickener",
    use: "Added to ice cream and bottled sauces"
  },
  {
    number: "E416",
    name: "Karaya gum",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E417",
    name: "Tara gum",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E418",
    name: "Gellan gum",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E425",
    name: "Konjac",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E426",
    name: "Soybean hemicellulose",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E427",
    name: "Cassia gum",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E432",
    name: "Polyoxyethylene sorbitan monolaurate; Polysorbate 20",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E433",
    name: "Polyoxyethylene sorbitan mono-oleate; Polysorbate 80",
    risk: 2,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E434",
    name: "Polyoxyethylene sorbitan monopalmitate; Polysorbate 40",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E435",
    name: "Polyoxyethylene sorbitan monostearate; Polysorbate 60",
    risk: 2,
    description: "Emulsifier, stabiliser, thickener, and gelling agent\r\nPrepared from sorbitol (E420)",
    use: "Bread and baked products"
  },
  {
    number: "E436",
    name: "Polyoxyethylene sorbitan tristearate; Polysorbate 65",
    risk: 2,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E440a",
    name: "Pectin",
    risk: 0,
    description: "Occurs naturally in fruits, roots, and stems of plants",
    use: "Used as a stabiliser and gelling agent\r\nAdded to preserves, jellies, and mint sauce"
  },
  {
    number: "E440b",
    name: "Amidated pectin",
    risk: 0,
    description: "Chemically treated pectin used as an emulsifier and gelling agent",
    use: "Preserves and jellies"
  },
  {
    number: "E442",
    name: "Ammonium phosphatide",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E444",
    name: "Sucrose acetate isobutyrate",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E445",
    name: "Glycerol esters of wood rosins",
    risk: 0,
    description: "Emulsifier, stabiliser, thickeners, and gelling agent",
    use: ""
  },
  {
    number: "E460",
    name: "Cellulose",
    risk: 2,
    description: "Fibrous part of plant cell walls used as a bulking agent",
    use: "Used in high fibre bread and low-calorie products"
  },
  {
    number: "E461",
    name: "Methyl cellulose",
    risk: 2,
    description: "Derived from cellulose with similar properties",
    use: "Used in slimming foods"
  },
  {
    number: "E462",
    name: "Ethyl cellulose",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E463",
    name: "Hydroxypropyl cellulose",
    risk: 2,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E464",
    name: "Hydroxypropyl methyl cellulose",
    risk: 2,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E465",
    name: "Ethyl methyl cellulose",
    risk: 2,
    description: "Derived from cellulose with similar properties",
    use: "Added to fruit cake and bottled sauces"
  },
  {
    number: "E466",
    name: "Carboxymethyl cellulose",
    risk: 2,
    description: "Derived from cellulose with similar properties",
    use: "Used in ice cream, cream products, and cheesecake mix"
  },
  {
    number: "E468",
    name: "Crosslinked sodium carboxymethyl cellulose",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E469",
    name: "Enzymatically hydrolysed carboxymethyl cellulose",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E470",
    name: "Fatty acid salts of aluminium, ammonia, calcium, magnesium, potassium and sodium",
    risk: 2,
    description: "",
    use: ""
  },
  {
    number: "E470a",
    name: "Sodium, potassium, and calcium salts of fatty acids",
    risk: 2,
    description: "Synthetically manufactured emulsifiers, stabilisers, and anti-caking agents",
    use: "Crisps and potato snacks"
  },
  {
    number: "E470b",
    name: "Magnesium salts of fatty acids",
    risk: 2,
    description: "Emulsifiers, stabilisers, thickeners, and gelling agents",
    use: ""
  },
  {
    number: "E471",
    name: "Mono- and diglycerides of fatty acids",
    risk: 2,
    description: "Normal products of fat digestion but are prepared synthetically",
    use: "Frequently added to powdered milk, packet soup, cake, crisps, potato snacks, bread, baked products, and margarine "
  },
  {
    number: "E472a",
    name: "Acetic acid esters of mono- and diglycerides of fatty acids",
    risk: 2,
    description: "Emulsifiers, stabilisers, thickeners, and gelling agents",
    use: ""
  },
  {
    number: "E472b",
    name: "Lactic acid esters of mono- and diglycerides of fatty acids",
    risk: 2,
    description: "Emulsifiers, stabilisers, thickeners, and gelling agents",
    use: ""
  },
  {
    number: "E472c",
    name: "Citric acid esters of mono- and diglycerides of fatty acids",
    risk: 2,
    description: "Emulsifiers, stabilisers, thickeners, and gelling agents",
    use: ""
  },
  {
    number: "E472d",
    name: "Tartaric acid esters of mono- and diglycerides of fatty acids",
    risk: 2,
    description: "Emulsifiers, stabilisers, thickeners, and gelling agents",
    use: ""
  },
  {
    number: "E472e",
    name: "Mono- and diacetyltartaric acid esters of mono- and diglycerides of fatty acids",
    risk: 2,
    description: "Emulsifiers, stabilisers, thickeners, and gelling agents",
    use: ""
  },
  {
    number: "E472f",
    name: "Mixed acetic and tartaric acid esters of mono- and diglycerides of fatty acids",
    risk: 2,
    description: "Emulsifiers, stabilisers, thickeners, and gelling agents",
    use: ""
  },
  {
    number: "E473",
    name: "Sucrose esters of fatty acids",
    risk: 0,
    description: "Emulsifiers, stabilisers, thickeners, and gelling agents",
    use: ""
  },
  {
    number: "E474",
    name: "Sucroglycerides",
    risk: 0,
    description: "Emulsifiers, stabilisers, thickeners, and gelling agents",
    use: ""
  },
  {
    number: "E475",
    name: "Polyglycerol esters of fatty acids",
    risk: 0,
    description: "Synthetic product of E471 used as an emulsifier and stabiliser",
    use: "Puddings and packet cheesecakes"
  },
  {
    number: "E476",
    name: "Polyglycerol polyricinoleate",
    risk: 0,
    description: "Emulsifiers, stabilisers, thickeners, and gelling agents",
    use: ""
  },
  {
    number: "E477",
    name: "Propane-1,2-diol esters of fatty acids",
    risk: 0,
    description: "Emulsifiers, stabilisers, thickeners, and gelling agents",
    use: ""
  },
  {
    number: "E479b",
    name: "Thermally oxidised soya bean oil interacted with mono- and diglycerides of fatty acids",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E481",
    name: "Sodium stearoyl-2-lactylate",
    risk: 0,
    description: "Prepared synthetically from lactic acid\r\nUsed as a stabiliser and emulsifier",
    use: "Potato snacks"
  },
  {
    number: "E482",
    name: "Calcium stearoyl-2-lactylate",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E483",
    name: "Stearyl tartrate",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E491",
    name: "Sorbitan monostearate",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E492",
    name: "Sorbitan tristearate",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E493",
    name: "Sorbitan monolaurate",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E494",
    name: "Sorbitan monooleate",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E495",
    name: "Sorbitan monopalmitate",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E1103",
    name: "Invertase",
    risk: 0,
    description: "Emulsifier, stabiliser, thickener, and gelling agent",
    use: ""
  },
  {
    number: "E260",
    name: "Acetic acid",
    risk: 0,
    description: "Natural component of vinegar but generally manufactured from wood\r\nUsed as a preservative, acid, or colour diluent",
    use: "Found in pickles, bottled sauces, and chutneys"
  },
  {
    number: "E261",
    name: "Potassium acetate",
    risk: 0,
    description: "Flavour agent, preservative, and acidity regulator\r\nPotassium salt of acetic acid (E260)",
    use: "Used as flavouring agent in snack foods such as potato chips (vinegar taste)\r\nAlso used in potassium supplements"
  },
  {
    number: "E262",
    name: "Sodium acetate",
    risk: 0,
    description: "Flavouring agent, preservative, and acid\r\nSodium salt of acetic acid (E260)",
    use: "Salt and vinegar chip flavouring, among other uses"
  },
  {
    number: "E263",
    name: "Calcium acetate",
    risk: 0,
    description: "Flavouring agent, preservative, and acid\r\nCalcium salt of acetic acid (E260)",
    use: ""
  },
  {
    number: "E270",
    name: "Lactic acid",
    risk: 0,
    description: "Produced by the fermentation of lactose (the sugar present in milk)\r\nOccurs naturally in soured milk and yoghurt\r\nActs as a preservative, acid, flavour, and assists the action of antioxidants",
    use: "Widely used in salad dressings, cakes, biscuits, confectionery, and certain types of prepared meat dishes"
  },
  {
    number: "E290",
    name: "Carbon dioxide",
    risk: 0,
    description: "Gas present in air, but produced synthetically for food\r\nAdds the fizz to fizzy drinks (carbonation)\r\nAlso used as a coolant, freezant, propellant, preservative, and packaging gas",
    use: "Carbonated drinks"
  },
  {
    number: "E296",
    name: "Malic acid",
    risk: 0,
    description: "Flavouring agent, acidity regulator, colour stabiliser",
    use: ""
  },
  {
    number: "E297",
    name: "Fumaric acid",
    risk: 0,
    description: "Prepared synthetically as an acid flavour",
    use: "Baked products"
  },
  {
    number: "E325",
    name: "Sodium lactate",
    risk: 0,
    description: "Preservative, acidity regulator, and bulking agent",
    use: ""
  },
  {
    number: "E326",
    name: "Potassium lactate",
    risk: 0,
    description: "Preservative",
    use: "Meat and poultry products"
  },
  {
    number: "E327",
    name: "Calcium lactate",
    risk: 0,
    description: "Firming agent, flavouring agent, thickener, stabiliser, antioxidant",
    use: "Used in fruit and vegetable processing\r\nMay be used in calcium supplements"
  },
  {
    number: "E330",
    name: "Citric acid; lemon salt",
    risk: 0,
    description: "Acidity regulator, preservative",
    use: "Commonly used in canned foods, snacks, ice creams, soft drinks"
  },
  {
    number: "E331",
    name: "Sodium citrates",
    risk: 0,
    description: "Preservatives, flavouring agents, emulsifiers\r\nSodium salt of citric acid (E330)",
    use: ""
  },
  {
    number: "E332",
    name: "Potassium citrates",
    risk: 0,
    description: "Acidity regulators, flavouring agents\r\nPotassium salt of citric acid (E330)",
    use: "As well as food additive, may be used to treat kidney stones"
  },
  {
    number: "E333",
    name: "Calcium citrates",
    risk: 0,
    description: "Preservatives, flavouring agents\r\nCalcium salt of citric acid (E330)",
    use: "As well as food additive, sometimes used in calcium supplements"
  },
  {
    number: "E334",
    name: "Tartaric acid (L-(+))",
    risk: 0,
    description: "Acidity regulator, flavouring agent, raising agent, stabiliser",
    use: "Sugar production, confectionary, winemaking"
  },
  {
    number: "E335",
    name: "Sodium tartrates",
    risk: 0,
    description: "Acidity regulators, stabilisers\r\nSodium salts of tartaric acid (E334)",
    use: "Binding agent in jellies, margarine, and sausage casings"
  },
  {
    number: "E336",
    name: "Potassium tartrates",
    risk: 0,
    description: "Acidity regulators, stabilisers\r\nPotassium salts of tartaric acid (E334)\r\nPotassium bitartrate = cream of tartar",
    use: ""
  },
  {
    number: "E337",
    name: "Sodium potassium tartrates",
    risk: 0,
    description: "Acidity regulators, stabilisers\r\nDouble salts of tartaric acid",
    use: ""
  },
  {
    number: "E338",
    name: "Phosphoric acid",
    risk: 0,
    description: "Acid, flavouring",
    use: "Soft drinks, jams"
  },
  {
    number: "E339",
    name: "Sodium phosphates",
    risk: 0,
    description: "Acidity regulator, thickener, emulsifier\r\nSodium salt of phosphoric acid (E338)",
    use: "Found in meat, cheese, and baked products"
  },
  {
    number: "E340",
    name: "Potassium phosphates",
    risk: 0,
    description: "Acidity regulator, raising agent, stabiliser\r\nPotassium salt of phosphoric acid (E338)",
    use: "As well as food additive, also used in some potassium supplements"
  },
  {
    number: "E341",
    name: "Calcium phosphates",
    risk: 0,
    description: "Anti-caking agent, emulsifier, stabiliser, acidity regulator\r\nCalcium salt of phosphoric acid (E338)",
    use: "Used to prevent lumps in powdered foods\r\nAlso used in some nutritional supplements"
  },
  {
    number: "E343",
    name: "Magnesium phosphates",
    risk: 0,
    description: "Acidity regulator, anti-caking agent, stabiliser",
    use: "Found in salt substitutes"
  },
  {
    number: "E350",
    name: "Sodium malate",
    risk: 0,
    description: "Acidity regulator, flavouring agent\r\nSodium salt of malic acid (E296)",
    use: ""
  },
  {
    number: "E351",
    name: "Potassium malate",
    risk: 0,
    description: "Acidity regulator, antioxidant, flavouring agent\r\nPotassium salt of malic acid (E296)",
    use: ""
  },
  {
    number: "E352",
    name: "Calcium malate",
    risk: 0,
    description: "Acidity regulator, flavouring agent, thickening agent\r\nCalcium salt of malic acid (E296)",
    use: ""
  },
  {
    number: "E353",
    name: "Metatartaric acid",
    risk: 0,
    description: "Acidity regulator",
    use: "Used in wine production"
  },
  {
    number: "E354",
    name: "Calcium tartrate",
    risk: 0,
    description: "Preservative and acidity regulator\r\nCalcium salt of tartaric acid (E334)",
    use: ""
  },
  {
    number: "E355",
    name: "Adipic acid",
    risk: 0,
    description: "Acidity regulator, flavouring and raising agent\r\nNaturally present in beets and sugar cane",
    use: "Used in baking powders, fizzy drinks, and drink mixes"
  },
  {
    number: "E356",
    name: "Sodium adipate",
    risk: 0,
    description: "Sodium salt of adipic acid",
    use: ""
  },
  {
    number: "E357",
    name: "Potassium adipate",
    risk: 0,
    description: "Potassium salt of adipic acid",
    use: ""
  },
  {
    number: "E363",
    name: "Succinic acid",
    risk: 0,
    description: "Acidity regulator, flavouring, fragrance",
    use: ""
  },
  {
    number: "E380",
    name: "Triammonium citrate",
    risk: 0,
    description: "Acid regulator, buffer, emulsifier\r\nAmmonium salt of citric acid",
    use: ""
  },
  {
    number: "E385",
    name: "Calcium disodium ethylene diamine tetra-acetate; calcium disodium EDTA",
    risk: 0,
    description: "Preservative, antioxidant",
    use: "Canned foods, soft drinks"
  },
  {
    number: "E422",
    name: "Glycerol",
    risk: 0,
    description: "Flavour enhancer, sweetener, colouring agent, preservative",
    use: "Widely used in baked goods and confectionary"
  },
  {
    number: "E423",
    name: "Octenyl succinic acid modified gum arabic",
    risk: 0,
    description: "Emulsifier\r\nChemical modification of gum arabic",
    use: "Processed meat, cheeses, jam, snacks, chewing gum"
  },
  {
    number: "E450",
    name: "Diphosphates",
    risk: 0,
    description: "Acid regulators, emulsifiers\r\nSalts of sodium / potassium / calcium with phosphates",
    use: "Many different products"
  },
  {
    number: "E451",
    name: "Triphosphates",
    risk: 0,
    description: "Preservatives, emulsifiers, stabilisers\r\nPotassium and sodium triphosphates",
    use: "Many different products"
  },
  {
    number: "E452",
    name: "Polyphosphates",
    risk: 0,
    description: "Stabilisers, emulsifiers\r\nPolyphosphates of potassium, calcium, ammonium, sodium",
    use: "Many different products"
  },
  {
    number: "E459",
    name: "Beta-cyclodextrin; betadex",
    risk: 0,
    description: "Emulsifier, flavouring agent",
    use: "Dry mixes (eg, for baking, soups, flavoured coffee or tea), cereal, other processed products"
  },
  {
    number: "E499",
    name: "Stigmasterol-rich plant sterols",
    risk: 0,
    description: "",
    use: ""
  },
  {
    number: "E500",
    name: "Sodium carbonate",
    risk: 0,
    description: "Acidity regulator, anti-caking agent, raising agent, stabiliser",
    use: ""
  },
  {
    number: "E501",
    name: "Potassium carbonate",
    risk: 0,
    description: "Acidity regulator, stabiliser, raising agent",
    use: "Baking\r\nCan be used in potassium supplements"
  },
  {
    number: "E503",
    name: "Ammonium carbonate",
    risk: 0,
    description: "Acidity regulator, stabiliser, leavening agent",
    use: "Flat-baked goods (eg, crackers, cookies)"
  },
  {
    number: "E504",
    name: "Magnesium carbonate",
    risk: 0,
    description: "Acidity regulator, colouring agent, anti-caking agent\r\nMay have laxative effect in high concentrations",
    use: "Salts, icing sugar, dry mixes\r\nDietary supplements (source of magnesium)"
  },
  {
    number: "E507",
    name: "Hydrochloric acid",
    risk: 0,
    description: "Acidity regulator",
    use: "Syrup production"
  },
  {
    number: "E508",
    name: "Potassium chloride",
    risk: 0,
    description: "Flavouring agent, thickener",
    use: "Sodium-free salt alternative"
  },
  {
    number: "E509",
    name: "Calcium chloride",
    risk: 0,
    description: "Preservative, stabiliser, firming agent, anti-caking agent, acid regulator",
    use: "Various food products, also used in some calcium supplements"
  },
  {
    number: "E511",
    name: "Magnesium chloride",
    risk: 0,
    description: "Stabiliser, firming agent",
    use: "Tofu preparation from soy milk"
  },
  {
    number: "E512",
    name: "Stannous chloride",
    risk: 0,
    description: "Antioxidant, colour retention agent",
    use: "Canned and bottled foods"
  },
  {
    number: "E513",
    name: "Sulphuric acid",
    risk: 0,
    description: "Acidity regulator",
    use: "Beer preparation and dairy products"
  },
  {
    number: "E514",
    name: "Sodium sulphate",
    risk: 0,
    description: "Acidity regulator, anti-caking agent, stabiliser\r\nSodium salt of sulphuric acid",
    use: "Beer, biscuits, confectionary, chewing gum"
  },
  {
    number: "E515",
    name: "Potassium sulphate",
    risk: 0,
    description: "Acid regulator, anti-caking agent\r\nPotassium salt of sulphuric acid",
    use: "Salt substitute\r\nBeer production"
  },
  {
    number: "E516",
    name: "Calcium sulphate",
    risk: 0,
    description: "Buffer, firming agent\r\nCalcium salt of sulphuric acid",
    use: "Soy products, tofu"
  },
  {
    number: "E517",
    name: "Ammonium sulphate",
    risk: 0,
    description: "Acidity regulator\r\nAmmonium salt of sulphuric acid",
    use: "Used in dough, baked products"
  },
  {
    number: "E520",
    name: "Aluminium sulphate",
    risk: 0,
    description: "Aluminium salt of sulphuric acid",
    use: "Beer brewing"
  },
  {
    number: "E521",
    name: "Aluminium sodium sulphate",
    risk: 0,
    description: "Acidity regulator, bleaching agent",
    use: "Flour, cheese, confectionary"
  },
  {
    number: "E522",
    name: "Aluminium potassium sulphate",
    risk: 0,
    description: "Acidity regulator, raising agent",
    use: "Baking products"
  },
  {
    number: "E523",
    name: "Aluminium ammonium sulphate",
    risk: 0,
    description: "Acidity regulator, stabiliser",
    use: "Baking products"
  },
  {
    number: "E524",
    name: "Sodium hydroxide",
    risk: 0,
    description: "Acidity regulator",
    use: "Baking, and chocolate, cocoa, fruit, and olive processing"
  },
  {
    number: "E525",
    name: "Potassium hydroxide",
    risk: 0,
    description: "Acidity regulator, stabiliser, thickening agent",
    use: ""
  },
  {
    number: "E526",
    name: "Calcium hydroxide",
    risk: 0,
    description: "Acidity regulator, preservative",
    use: "Beer production\r\nPretzel glazing\r\nVegetable processing"
  },
  {
    number: "E527",
    name: "Ammonium hydroxide",
    risk: 0,
    description: "Acidity regulator",
    use: "Baked goods\r\nConfectionary\r\nPuddings"
  },
  {
    number: "E528",
    name: "Magnesium hydroxide",
    risk: 0,
    description: "Anti-caking agent, acidity regulator",
    use: "Cheese, canned vegetables"
  },
  {
    number: "E529",
    name: "Calcium oxide (quicklime)",
    risk: 0,
    description: "Acidity regulator, raising agent",
    use: "Sugar production\r\nBaked products"
  },
  {
    number: "E530",
    name: "Magnesium oxide",
    risk: 0,
    description: "Anti-caking agent, acidity regulator",
    use: "Manufacture of powdered goods (eg, milk powder)\r\nAlso used for relief of heartburn / reflux"
  },
  {
    number: "E535",
    name: "Sodium ferrocyanide",
    risk: 0,
    description: "Anti-caking agent",
    use: "Added to table salt"
  },
  {
    number: "E536",
    name: "Potassium ferrocyanide",
    risk: 0,
    description: "Anti-caking agent",
    use: "In table salts"
  },
  {
    number: "E538",
    name: "Calcium ferrocyanide",
    risk: 0,
    description: "Anti-caking agent",
    use: "In table salts"
  },
  {
    number: "E541",
    name: "Sodium aluminium phosphate",
    risk: 0,
    description: "Synthetically prepared raising agent",
    use: "Self-raising flour"
  },
  {
    number: "E551",
    name: "Silicon dioxide (Silica)",
    risk: 0,
    description: "Derived from sand\r\nUsed as an anti-caking agent",
    use: "Potato snacks"
  },
  {
    number: "E552",
    name: "Calcium silicate",
    risk: 0,
    description: "Salt of silicon dioxide with similar functions\r\nAlso used as a glazing agent, acid regulator, releasing agent, and coating agent",
    use: "Found in chewing gum, meat pies, salt, and confectionery"
  },
  {
    number: "E553a",
    name: "(i) Magnesium silicate\r\n(ii) Magnesium trisilicate",
    risk: 0,
    description: "Salt of silicon dioxide with similar functions",
    use: ""
  },
  {
    number: "E553b",
    name: "Talc",
    risk: 0,
    description: "Anti-caking agent, bulking agent, glazing agent",
    use: ""
  },
  {
    number: "E554",
    name: "Sodium aluminium silicate",
    risk: 0,
    description: "Anti-caking agent",
    use: "Used in salt and sugar products, egg mixes, flours, dried milk substitutes"
  },
  {
    number: "E555",
    name: "Potassium aluminium silicate",
    risk: 0,
    description: "Anti-caking agent",
    use: ""
  },
  {
    number: "E570",
    name: "Fatty acids; stearic acid",
    risk: 0,
    description: "Anti-caking agent, flavouring agent",
    use: "Baked products, chewing gum, confectionary, artificial sweeteners"
  },
  {
    number: "E574",
    name: "Gluconic acid",
    risk: 0,
    description: "Acidity regulator",
    use: ""
  },
  {
    number: "E575",
    name: "Glucono delta-lactone (GDL); gluconolactone",
    risk: 0,
    description: "Acidity regulator, preservative, raising agent",
    use: "Tofu making\r\nBaked, meat, and cheese products"
  },
  {
    number: "E576",
    name: "Sodium gluconate",
    risk: 0,
    description: "Stabiliser, thickener, sequestrant\r\nSodium salt of gluconic acid",
    use: ""
  },
  {
    number: "E577",
    name: "Potassium gluconate",
    risk: 0,
    description: "Sequestrant, stabiliser, anti-caking, thickening agent\r\nPotassium salt of gluconic acid",
    use: ""
  },
  {
    number: "E578",
    name: "Calcium gluconate",
    risk: 0,
    description: "Anti-caking agent, thickener, stabiliser, acidity regulator\r\nCalcium salt of gluconic acid",
    use: "Health products eg, bodybuilding formulas, sports drinks\r\nCereal\r\nBeverages\r\nDietary supplements (calcium source)"
  },
  {
    number: "E579",
    name: "Ferrous gluconate",
    risk: 0,
    description: "Colouring agent, nutritional supplement",
    use: "Processing black olives\r\nIron source (food fortification)"
  },
  {
    number: "E585",
    name: "Ferrous lactate",
    risk: 0,
    description: "Acidity regulator, flavouring, colour retention agent, nutritional supplement",
    use: "Iron source (food fortification)"
  },
  {
    number: "E620",
    name: "L-Glutamic acid",
    risk: 3,
    description: "Naturally occurring amino acid obtained from protein but generally manufactured by bacterial fermentation of carbohydrates\r\nUsed as a flavour enhancer and salt substitute",
    use: "Used as a nutrient to increase protein values"
  },
  {
    number: "E621",
    name: "Monosodium glutamate (MSG)",
    risk: 3,
    description: "Present naturally in seaweed but generally prepared chemically from sugar beet\r\nFlavour enhancer of protein rich foods",
    use: "Meat, Chinese foods, packet convenience meals and snacks (eg, soup), dried products, crisps, and potato snacks"
  },
  {
    number: "E622",
    name: "Monopotassium glutamate",
    risk: 3,
    description: "Similar to monosodium glutamate",
    use: "Similar to E621"
  },
  {
    number: "E623",
    name: "Calcium glutamate",
    risk: 3,
    description: "Similar to monosodium glutamate",
    use: "Similar to E621"
  },
  {
    number: "E624",
    name: "Monoammonium glutamate",
    risk: 3,
    description: "Ammonium salt of glutamic acid",
    use: ""
  },
  {
    number: "E625",
    name: "Magnesium diglutamate",
    risk: 3,
    description: "",
    use: ""
  },
  {
    number: "E626",
    name: "Guanylic acid",
    risk: 0,
    description: "More expensive additive",
    use: "May be found in snacks, packet soups, and instant noodles"
  },
  {
    number: "E627",
    name: "Disodium guanylate",
    risk: 3,
    description: "Occurs naturally in sardines and yeast extract but generally manufactured synthetically\r\nUsed as a flavour enhancer",
    use: "Often added to crisps and other potato snacks, gravy granules and pre-cooked dried rice"
  },
  {
    number: "E628",
    name: "Dipotassium guanylate",
    risk: 0,
    description: "Flavour enhancer\r\nPotassium salt of guanylic acid",
    use: ""
  },
  {
    number: "E629",
    name: "Calcium guanylate",
    risk: 0,
    description: "Flavour enhancer\r\nCalcium salt of guanylic acid",
    use: ""
  },
  {
    number: "E630",
    name: "Inosinic acid",
    risk: 0,
    description: "Flavour enhancer",
    use: ""
  },
  {
    number: "E631",
    name: "Disodium inosinate",
    risk: 3,
    description: "Made from sardines and meat extract",
    use: "Similar to E627"
  },
  {
    number: "E632",
    name: "Dipotassium inosinate",
    risk: 0,
    description: "Flavour enhancer",
    use: ""
  },
  {
    number: "E633",
    name: "Calcium inosinate",
    risk: 0,
    description: "Flavour enhancer",
    use: ""
  },
  {
    number: "E634",
    name: "Calcium 5'-ribonucleotides",
    risk: 0,
    description: "Flavour enhancer",
    use: "Mainly used in low sodium (low salt) products"
  },
  {
    number: "E635",
    name: "Sodium-5-ribonucleotide",
    risk: 3,
    description: "Mixture of E627 and E631",
    use: "Added to crisps, potato snacks, and packet soups"
  },
  {
    number: "E640",
    name: "Glycine and its sodium salt",
    risk: 0,
    description: "Glycine is an amino acid\r\nUsed as flavour enhancer and sweetener",
    use: "Bread enhancer\r\nAlso used in food supplements and protein drinks"
  },
  {
    number: "E641",
    name: "L-leucine",
    risk: 0,
    description: "Flavouring agent\r\nAmino acid",
    use: ""
  },
  {
    number: "E650",
    name: "Zinc acetate",
    risk: 0,
    description: "Flavour enhancer",
    use: ""
  },
  {
    number: "E900",
    name: "Dimethylpolysiloxane",
    risk: 0,
    description: "Anti-foaming agent",
    use: "Fats and oils"
  },
  {
    number: "E901",
    name: "Beeswax, white and yellow",
    risk: 0,
    description: "Glazing agent",
    use: ""
  },
  {
    number: "E902",
    name: "Candelilla wax",
    risk: 0,
    description: "Glazing agent, occlusive",
    use: "Chewing gums\r\nSurface finishing agent"
  },
  {
    number: "E903",
    name: "Carnauba wax",
    risk: 0,
    description: "Glazing agent",
    use: "Confectionary, fruit, nuts, chocolate, chewing gum, baked goods, and coffee beans"
  },
  {
    number: "E904",
    name: "Shellac",
    risk: 0,
    description: "Glazing agent",
    use: "Fruit, candy coating"
  },
  {
    number: "E905",
    name: "Microcrystalline wax",
    risk: 0,
    description: "Glazing agent",
    use: "Fruit, candy, cheese, chewing gum"
  },
  {
    number: "E907",
    name: "Hydrogenated poly-1-decene",
    risk: 0,
    description: "",
    use: ""
  },
  {
    number: "E914",
    name: "Oxidised polyethylene wax",
    risk: 0,
    description: "Glazing / coating agent",
    use: "Fruit"
  },
  {
    number: "E920",
    name: "L-cysteine",
    risk: 0,
    description: "Amino acid",
    use: "Bread enhancer"
  },
  {
    number: "E927b",
    name: "Carbamide",
    risk: 0,
    description: "",
    use: ""
  },
  {
    number: "E938",
    name: "Argon",
    risk: 0,
    description: "Packaging gas",
    use: ""
  },
  {
    number: "E939",
    name: "Helium",
    risk: 0,
    description: "Packaging gas",
    use: ""
  },
  {
    number: "E941",
    name: "Nitrogen",
    risk: 0,
    description: "Packaging gas",
    use: ""
  },
  {
    number: "E942",
    name: "Nitrous oxide",
    risk: 0,
    description: "Aerosol spray propellant",
    use: ""
  },
  {
    number: "E943a",
    name: "Butane",
    risk: 0,
    description: "Aerosol spray propellant",
    use: ""
  },
  {
    number: "E943b",
    name: "Iso-butane",
    risk: 0,
    description: "Aerosol spray propellant",
    use: ""
  },
  {
    number: "E944",
    name: "Propane",
    risk: 0,
    description: "Aerosol spray propellant",
    use: ""
  },
  {
    number: "E948",
    name: "Oxygen",
    risk: 0,
    description: "Packaging gas",
    use: ""
  },
  {
    number: "E949",
    name: "Hydrogen",
    risk: 0,
    description: "Packaging gas",
    use: ""
  },
  {
    number: "E999",
    name: "Quillaia extract",
    risk: 2,
    description: "Stabiliser, surfactant",
    use: "Humectant in baked goods\r\nSoft drink foaming agent"
  },
  {
    number: "E1200",
    name: "Polydextrose",
    risk: 0,
    description: "Naturally occurring sugar in grapes and corn",
    use: "Confectionery, cakes, biscuits, puddings, desserts, soft drinks, and convenience foods"
  },
  {
    number: "E1201",
    name: "Polyvinylpyrrolidone (PVP)",
    risk: 0,
    description: "Stabiliser, emulsifier, thickener",
    use: "Food additive and used in wine production"
  },
  {
    number: "E1202",
    name: "Polyvinylpolypyrrolidone (PVPP)",
    risk: 0,
    description: "",
    use: "Clarifying agent for beer, wine, and vinegar"
  },
  {
    number: "E1203",
    name: "Polyvinyl alcohol",
    risk: 0,
    description: "Thickener, glazing agent",
    use: "Powdered desserts, confectionary, food supplements"
  },
  {
    number: "E1204",
    name: "Pullulan",
    risk: 0,
    description: "Thickener\r\nNatural polysaccharide",
    use: "Edible decorating film in bakery products and confectionary\r\nThickener in sauces and dressings"
  },
  {
    number: "E1205",
    name: "Basic methacrylate copolymer",
    risk: 0,
    description: "Glazing/coating agent",
    use: ""
  },
  {
    number: "E1206",
    name: "Neutral methacrylate copolymer",
    risk: 0,
    description: "Glazing agent",
    use: ""
  },
  {
    number: "E1207",
    name: "Anionic methacrylate copolymer",
    risk: 0,
    description: "Glazing/coating agent",
    use: ""
  },
  {
    number: "E1208",
    name: "Polyvinylpyrrolidone-vinyl acetate copolymer",
    risk: 0,
    description: "",
    use: ""
  },
  {
    number: "E1209",
    name: "Polyvinyl alcohol-polyethylene glycol-graft copolymer; PVA-PEG graft copolymer",
    risk: 0,
    description: "Glazing agent, stabiliser",
    use: ""
  },
  {
    number: "E1400",
    name: "Starches",
    risk: 0,
    description: "Generally of maize, corn, potato, wheat, or tapioca in origin\r\nUsed to modify texture and stability",
    use: "Sauces, chutneys, confectionery, desserts, meat, fish, dairy, and baked products"
  },
  {
    number: "E1404",
    name: "Oxidised starch",
    risk: 0,
    description: "",
    use: ""
  },
  {
    number: "E1410",
    name: "Monostarch phosphate",
    risk: 0,
    description: "Anti-caking agent, thickener, stabiliser, emulsifier, glazing agent",
    use: ""
  },
  {
    number: "E1412",
    name: "Distarch phosphate",
    risk: 0,
    description: "Modified starch",
    use: "Fruit gels and cream fillings, baked goods"
  },
  {
    number: "E1413",
    name: "Phosphated distarch phosphate",
    risk: 0,
    description: "Stabiliser while freezing / thawing",
    use: "Soups, sauces, frozen pies etc."
  },
  {
    number: "E1414",
    name: "Acetylated distarch phosphate",
    risk: 0,
    description: "Stabiliser, emulsifier",
    use: "Oily foods"
  },
  {
    number: "E1420",
    name: "Acetylated starch",
    risk: 0,
    description: "Modified starch",
    use: ""
  },
  {
    number: "E1422",
    name: "Acetylated distarch adipate",
    risk: 0,
    description: "Thickening agent",
    use: "Sauces"
  },
  {
    number: "E1440",
    name: "Hydroxyl propyl starch",
    risk: 0,
    description: "Modified starch",
    use: ""
  },
  {
    number: "E1442",
    name: "Hydroxy propyl distarch phosphate",
    risk: 0,
    description: "Modified starch",
    use: ""
  },
  {
    number: "E1450",
    name: "Starch sodium octenyl succinate",
    risk: 0,
    description: "Emulsifier\r\nModified starch",
    use: ""
  },
  {
    number: "E1451",
    name: "Acetylated oxidised starch",
    risk: 0,
    description: "",
    use: ""
  },
  {
    number: "E1452",
    name: "Starch aluminium Octenyl succinate",
    risk: 0,
    description: "Anti-caking, thickening, emulsifying, and glazing roles",
    use: ""
  },
  {
    number: "E1505",
    name: "Triethyl citrate",
    risk: 0,
    description: "Stabiliser, antioxidant, glazing agent\r\nEster of citric acid",
    use: "Stabilises"
  },
  {
    number: "E1517",
    name: "Glyceryl diacetate; diacetin",
    risk: 0,
    description: "Solvent for other additives",
    use: ""
  },
  {
    number: "E1518",
    name: "Glyceryl triacetate; triacetin",
    risk: 0,
    description: "Humectant, flavouring agent",
    use: ""
  },
  {
    number: "E1520",
    name: "Propan-1,2-diol; propylene glycol",
    risk: 0,
    description: "Synthetic carrier for extracts, flavours, and spices\r\nFunctions as a stabiliser and humectant",
    use: "Miscellaneous foods"
  },
  {
    number: "E1521",
    name: "Polyethylene glycol (PEG)",
    risk: 0,
    description: "Colouring agent, emulsifier, flavouring, humectant",
    use: ""
  }
]