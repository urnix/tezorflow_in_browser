const MOBILENET_CLASSES  =[
    'baby',
    'child',
    'stingray',
    'cock',
    'hen',
    'bulbul',
    'jay',
    'magpie',
    'chickadee',
    'kite',
    'vulture',
    'eft',
    'mud turtle',
    'terrapin',
    'banded gecko',
    'agama',
    'alligator lizard',
    'triceratops',
    'water snake',
    'vine snake',
    'green mamba',
    'sea snake',
    'trilobite',
    'scorpion',
    'tarantula',
    'tick',
    'centipede',
    'black grouse',
    'ptarmigan',
    'peacock',
    'quail',
    'partridge',
    'macaw',
    'lorikeet',
    'coucal',
    'bee eater',
    'hornbill',
    'hummingbird',
    'jacamar',
    'toucan',
    'drake',
    'goose',
    'tusker',
    'wombat',
    'jellyfish',
    'brain coral',
    'conch',
    'snail',
    'slug',
    'fiddler crab',
    'hermit crab',
    'isopod',
    'spoonbill',
    'flamingo',
    'bittern',
    'bustard',
    'dowitcher',
    'pelican',
    'sea lion',
    'Chihuahua',
    'Japanese spaniel',
    'Shih-Tzu',
    'Blenheim spaniel',
    'papillon',
    'toy terrier',
    'Rhodesian ridgeback',
    'beagle',
    'bluetick',
    'black-and-tan coonhound',
    'English foxhound',
    'redbone',
    'Irish wolfhound',
    'Italian greyhound',
    'whippet',
    'Weimaraner',
    'Border terrier',
    'Kerry blue terrier',
    'Irish terrier',
    'Norfolk terrier',
    'Norwich terrier',
    'Yorkshire terrier',
    'wire-haired fox terrier',
    'Lakeland terrier',
    'Australian terrier',
    'miniature schnauzer',
    'giant schnauzer',
    'standard schnauzer',
    'soft-coated wheaten terrier',
    'West Highland white terrier',
    'flat-coated retriever',
    'curly-coated retriever',
    'golden retriever',
    'Labrador retriever',
    'Chesapeake Bay retriever',
    'German short-haired pointer',
    'English setter',
    'Gordon setter',
    'Brittany spaniel',
    'Welsh springer spaniel',
    'Sussex spaniel',
    'Irish water spaniel',
    'kuvasz',
    'schipperke',
    'groenendael',
    'malinois',
    'briard',
    'kelpie',
    'komondor',
    'collie',
    'Border collie',
    'Rottweiler',
    'miniature pinscher',
    'Greater Swiss Mountain dog',
    'Bernese mountain dog',
    'Appenzeller',
    'EntleBucher',
    'boxer',
    'bull mastiff',
    'Tibetan mastiff',
    'French bulldog',
    'Great Dane',
    'Siberian husky',
    'basenji',
    'Leonberg',
    'Great Pyrenees',
    'Pomeranian',
    'keeshond',
    'Brabancon griffon',
    'toy poodle',
    'miniature poodle',
    'standard poodle',
    'Mexican hairless',
    'tiger cat',
    'Persian cat',
    'Egyptian cat',
    'mongoose',
    'tiger beetle',
    'dung beetle',
    'rhinoceros beetle',
    'weevil',
    'fly',
    'bee',
    'cricket',
    'leafhopper',
    'admiral',
    'cabbage butterfly',
    'sea urchin',
    'hare',
    'hamster',
    'marmot',
    'beaver',
    'sorrel',
    'zebra',
    'warthog',
    'ox',
    'bison',
    'hartebeest',
    'gazelle',
    'llama',
    'weasel',
    'mink',
    'otter',
    'badger',
    'armadillo',
    'baboon',
    'macaque',
    'langur',
    'marmoset',
    'eel',
    'anemone fish',
    'sturgeon',
    'lionfish',
    'abacus',
    'abaya',
    'acoustic guitar',
    'airliner',
    'altar',
    'ambulance',
    'analog clock',
    'apron',
    'balloon',
    'Band Aid',
    'banjo',
    'barbell',
    'barber chair',
    'barbershop',
    'barn',
    'barometer',
    'baseball',
    'basketball',
    'bassinet',
    'bassoon',
    'bath towel',
    'beaker',
    'beer bottle',
    'beer glass',
    'bib',
    'birdhouse',
    'boathouse',
    'bookcase',
    'bottlecap',
    'bow',
    'broom',
    'buckle',
    'bulletproof vest',
    'cannon',
    'canoe',
    'cardigan',
    'car mirror',
    'carton',
    'car wheel',
    'cassette player',
    'castle',
    'catamaran',
    'CD player',
    'chain',
    'chainlink fence',
    'chest',
    'Christmas stocking',
    'cliff dwelling',
    'cloak',
    'cocktail shaker',
    'coffee mug',
    'coffeepot',
    'combination lock',
    'convertible',
    'cowboy boot',
    'cradle',
    'crane',
    'crash helmet',
    'crate',
    'Crock Pot',
    'croquet ball',
    'crutch',
    'cuirass',
    'desk',
    'desktop computer',
    'digital clock',
    'digital watch',
    'dome',
    'drumstick',
    'dumbbell',
    'Dutch oven',
    'electric guitar',
    'electric locomotive',
    'entertainment center',
    'envelope',
    'espresso maker',
    'face powder',
    'fireboat',
    'folding chair',
    'football helmet',
    'forklift',
    'fountain',
    'fountain pen',
    'four-poster',
    'freight car',
    'fur coat',
    'goblet',
    'go-kart',
    'golf ball',
    'gondola',
    'gown',
    'guillotine',
    'hair slide',
    'hair spray',
    'half track',
    'hammer',
    'hamper',
    'harp',
    'hatchet',
    'holster',
    'honeycomb',
    'hourglass',
    'iPod',
    'jigsaw puzzle',
    'joystick',
    'kimono',
    'knee pad',
    'knot',
    'ladle',
    'library',
    'lifeboat',
    'Loafer',
    'lotion',
    'magnetic compass',
    'maillot',
    'manhole cover',
    'maraca',
    'mask',
    'matchstick',
    'maypole',
    'measuring cup',
    'military uniform',
    'milk can',
    'minibus',
    'minivan',
    'missile',
    'mitten',
    'mixing bowl',
    'Model T',
    'modem',
    'monastery',
    'monitor',
    'moped',
    'mortar',
    'mortarboard',
    'mosque',
    'mosquito net',
    'mountain tent',
    'mousetrap',
    'moving van',
    'muzzle',
    'nail',
    'neck brace',
    'necklace',
    'nipple',
    'obelisk',
    'oil filter',
    'overskirt',
    'oxcart',
    'oxygen mask',
    'packet',
    'padlock',
    'paintbrush',
    'palace',
    'paper towel',
    'park bench',
    'parking meter',
    'pencil sharpener',
    'Petri dish',
    'photocopier',
    'pickelhaube',
    'pier',
    'pill bottle',
    'pillow',
    'ping-pong ball',
    'pinwheel',
    'planetarium',
    'plastic bag',
    'plate rack',
    'pole',
    'poncho',
    'power drill',
    'printer',
    'projector',
    'purse',
    'radiator',
    'rain barrel',
    'reel',
    'reflex camera',
    'rifle',
    'rotisserie',
    'rugby ball',
    'running shoe',
    'safe',
    'safety pin',
    'sandal',
    'sarong',
    'scabbard',
    'school bus',
    'schooner',
    'scoreboard',
    'screw',
    'screwdriver',
    'sewing machine',
    'shoji',
    'shopping basket',
    'shopping cart',
    'shovel',
    'shower cap',
    'shower curtain',
    'ski',
    'ski mask',
    'sleeping bag',
    'sliding door',
    'snorkel',
    'snowmobile',
    'soap dispenser',
    'soccer ball',
    'sock',
    'sombrero',
    'soup bowl',
    'space bar',
    'space heater',
    'space shuttle',
    'spatula',
    'speedboat',
    'spindle',
    'stage',
    'steam locomotive',
    'steel arch bridge',
    'steel drum',
    'stethoscope',
    'stole',
    'stone wall',
    'stove',
    'strainer',
    'stretcher',
    'sundial',
    'sunglass',
    'suspension bridge',
    'sweatshirt',
    'swing',
    'syringe',
    'table lamp',
    'tape player',
    'teapot',
    'tennis ball',
    'thimble',
    'throne',
    'tile roof',
    'toaster',
    'toilet seat',
    'torch',
    'totem pole',
    'toyshop',
    'tractor',
    'trench coat',
    'trimaran',
    'tripod',
    'triumphal arch',
    'trombone',
    'turnstile',
    'typewriter keyboard',
    'umbrella',
    'vase',
    'vault',
    'velvet',
    'vending machine',
    'vestment',
    'viaduct',
    'volleyball',
    'waffle iron',
    'wall clock',
    'water bottle',
    'water jug',
    'water tower',
    'whiskey jug',
    'whistle',
    'wig',
    'window screen',
    'window shade',
    'Windsor tie',
    'wine bottle',
    'wing',
    'wok',
    'wooden spoon',
    'wreck',
    'yawl',
    'yurt',
    'comic book',
    'street sign',
    'menu',
    'plate',
    'guacamole',
    'consomme',
    'trifle',
    'French loaf',
    'pretzel',
    'cheeseburger',
    'mashed potato',
    'head cabbage',
    'broccoli',
    'cauliflower',
    'spaghetti squash',
    'acorn squash',
    'butternut squash',
    'bell pepper',
    'cardoon',
    'mushroom',
    'Granny Smith',
    'strawberry',
    'orange',
    'lemon',
    'fig',
    'banana',
    'custard apple',
    'pomegranate',
    'hay',
    'carbonara',
    'dough',
    'potpie',
    'burrito',
    'red wine',
    'espresso',
    'cup',
    'eggnog',
    'alp',
    'bubble',
    'coral reef',
    'geyser',
    'volcano',
    'scuba diver',
    'rapeseed',
    'daisy',
    'acorn',
    'coral fungus',
    'agaric',
    'gyromitra',
    'earthstar',
    'bolete',
    'tench','Tinca tinca',
    'goldfish','Carassius auratus',
    'great white shark','white shark','man-eater','man-eating shark','Carcharodon caharias',
    'hammerhead','hammerhead shark',
    'electric ray','crampfish','numbfish','torpedo',
    'ostrich','Struthio camelus',
    'brambling','Fringilla montifringilla',
    'goldfinch','Carduelis carduelis',
    'house finch','linnet','Carpodacus mexicanus',
    'junco','snowbird',
    'indigo bunting','indigo finch','indigo bird','Passerina cyanea',
    'robin','American robin','Turdus migratorius',
    'water ouzel','dipper',
    'bald eagle','American eagle','Haliaeetus leucocephalus',
    'great grey owl','great gray owl','Strix nebulosa',
    'European fire salamander','Salamandra salamandra',
    'common newt','Triturus vulgaris',
    'spotted salamander','Ambystoma maculatum',
    'axolotl','mud puppy','Ambystoma mexicanum',
    'bullfrog','Rana catesbeiana',
    'tree frog','tree-frog',
    'tailed frog','bell toad','ribbed toad','tailed toad','Ascaphus trui',
    'loggerhead','loggerhead turtle','Caretta caretta',
    'leatherback turtle','leatherback','leathery turtle','Dermochelys coriacea',
    'box turtle','box tortoise',
    'common iguana','iguana','Iguana iguana',
    'American chameleon','anole','Anolis carolinensis',
    'whiptail','whiptail lizard',
    'frilled lizard','Chlamydosaurus kingi',
    'Gila monster','Heloderma suspectum',
    'green lizard','Lacerta viridis',
    'African chameleon','Chamaeleo chamaeleon',
    'Komodo dragon','Komodo lizard','dragon lizard','giant lizard',
    'American alligator','Alligator mississipiensis',
    'thunder snake','worm snake','Carphophis amoenus',
    'ringneck snake','ring-necked snake','ring snake',
    'hognose snake','puff adder','sand viper',
    'green snake','grass snake',
    'king snake','kingsnake',
    'garter snake','grass snake',
    'night snake','Hypsiglena torquata',
    'boa constrictor','Constrictor constrictor',
    'rock python','rock snake','Python sebae',
    'Indian cobra','Naja naja',
    'horned viper','cerastes','sand viper','horned asp','Cerastes cornutus',
    'diamondback','diamondback rattlesnake','Crotalus adamanteus',
    'sidewinder','horned rattlesnake','Crotalus cerastes',
    'harvestman','daddy longlegs','Phalangium opilio',
    'black and gold garden spider','Argiope aurantia',
    'barn spider','Araneus cavaticus',
    'garden spider','Aranea diademata',
    'black widow','Latrodectus mactans',
    'wolf spider','hunting spider',
    'ruffed grouse','partridge','Bonasa umbellus',
    'prairie chicken','prairie grouse','prairie fowl',
    'African grey','African gray','Psittacus erithacus',
    'sulphur-crested cockatoo','Kakatoe galerita','Cacatua galerita',
    'red-breasted merganser','Mergus serrator',
    'black swan','Cygnus atratus',
    'echidna','spiny anteater','anteater',
    'platypus','duckbill','duckbilled platypus','duck-billed platypus',
    'koala','koala bear','kangaroo bear','native bear','Phascolarctos cinereus',
    'sea anemone','anemone',
    'flatworm','platyhelminth',
    'nematode','nematode worm','roundworm',
    'sea slug','nudibranch',
    'chiton','coat-of-mail shell','sea cradle','polyplacophore',
    'chambered nautilus','pearly nautilus','nautilus',
    'Dungeness crab','Cancer magister',
    'rock crab','Cancer irroratus',
    'king crab','Alaska crab','Alaskan king crab','Alaska king crab',
    'spiny lobster','langouste','rock lobster','crawfish','crayfish','sea crawfish',
    'crayfish','crawfish','crawdad','crawdaddy',
    'white stork','Ciconia ciconia',
    'black stork','Ciconia nigra',
    'little blue heron','Egretta caerulea',
    'American egret','great white heron','Egretta albus',
    'crane','bird',
    'limpkin','Aramus pictus',
    'European gallinule','Porphyrio porphyrio',
    'American coot','marsh hen','mud hen','water hen','Fulica americana',
    'ruddy turnstone','Arenaria interpres',
    'red-backed sandpiper','dunlin','Erolia alpina',
    'redshank','Tringa totanus',
    'oystercatcher','oyster catcher',
    'king penguin','Aptenodytes patagonica',
    'albatross','mollymawk',
    'grey whale','gray whale','devilfish','Eschrichtius gibbosus',
    'dugong','Dugong dugon',
    'Maltese dog','Maltese terrier','Maltese',
    'Pekinese','Pekingese','Peke',
    'Afghan hound','Afghan',
    'basset','basset hound',
    'bloodhound','sleuthhound',
    'Walker hound','Walker foxhound',
    'borzoi','Russian wolfhound',
    'Ibizan hound','Ibizan Podenco',
    'Norwegian elkhound','elkhound',
    'otterhound','otter hound',
    'Saluki','gazelle hound',
    'Scottish deerhound','deerhound',
    'Staffordshire bullterrier','Staffordshire bull terrier',
    'American Staffordshire terrier','Staffordshire terrier','American pit bull rrier',
    'Sealyham terrier','Sealyham',
    'Airedale','Airedale terrier',
    'cairn','cairn terrier',
    'Dandie Dinmont','Dandie Dinmont terrier',
    'Boston bull','Boston terrier',
    'Scotch terrier','Scottish terrier','Scottie',
    'Tibetan terrier','chrysanthemum dog',
    'silky terrier','Sydney silky',
    'Lhasa','Lhasa apso',
    'vizsla','Hungarian pointer',
    'Irish setter','red setter',
    'clumber','clumber spaniel',
    'English springer','English springer spaniel',
    'cocker spaniel','English cocker spaniel','cocker',
    'Old English sheepdog','bobtail',
    'Shetland sheepdog','Shetland sheep dog','Shetland',
    'Bouvier des Flandres','Bouviers des Flandres',
    'German shepherd','German shepherd dog','German police dog','alsatian',
    'Doberman','Doberman pinscher',
    'Saint Bernard','St Bernard',
    'Eskimo dog','husky',
    'malamute','malemute','Alaskan malamute',
    'dalmatian','coach dog','carriage dog',
    'affenpinscher','monkey pinscher','monkey dog',
    'pug','pug-dog',
    'Newfoundland','Newfoundland dog',
    'Samoyed','Samoyede',
    'chow','chow chow',
    'Pembroke','Pembroke Welsh corgi',
    'Cardigan','Cardigan Welsh corgi',
    'timber wolf','grey wolf','gray wolf','Canis lupus',
    'white wolf','Arctic wolf','Canis lupus tundrarum',
    'red wolf','maned wolf','Canis rufus','Canis niger',
    'coyote','prairie wolf','brush wolf','Canis latrans',
    'dingo','warrigal','warragal','Canis dingo',
    'dhole','Cuon alpinus',
    'African hunting dog','hyena dog','Cape hunting dog','Lycaon pictus',
    'hyena','hyaena',
    'red fox','Vulpes vulpes',
    'kit fox','Vulpes macrotis',
    'Arctic fox','white fox','Alopex lagopus',
    'grey fox','gray fox','Urocyon cinereoargenteus',
    'tabby','tabby cat',
    'Siamese cat','Siamese',
    'cougar','puma','catamount','mountain lion','painter','panther','Felis concolor',
    'lynx','catamount',
    'leopard','Panthera pardus',
    'snow leopard','ounce','Panthera uncia',
    'jaguar','panther','Panthera onca','Felis onca',
    'lion','king of beasts','Panthera leo',
    'tiger','Panthera tigris',
    'cheetah','chetah','Acinonyx jubatus',
    'brown bear','bruin','Ursus arctos',
    'American black bear','black bear','Ursus americanus','Euarctos americanus',
    'ice bear','polar bear','Ursus Maritimus','Thalarctos maritimus',
    'sloth bear','Melursus ursinus','Ursus ursinus',
    'meerkat','mierkat',
    'ladybug','ladybeetle','lady beetle','ladybird','ladybird beetle',
    'ground beetle','carabid beetle',
    'long-horned beetle','longicorn','longicorn beetle',
    'leaf beetle','chrysomelid',
    'ant','emmet','pismire',
    'grasshopper','hopper',
    'walking stick','walkingstick','stick insect',
    'cockroach','roach',
    'mantis','mantid',
    'cicada','cicala',
    'lacewing','lacewing fly',
    'dragonfly','darning needle',
    'ringlet','ringlet butterfly',
    'monarch','monarch butterfly','milkweed butterfly','Danaus plexippus',
    'sulphur butterfly','sulfur butterfly',
    'lycaenid','lycaenid butterfly',
    'starfish','sea star',
    'sea cucumber','holothurian',
    'wood rabbit','cottontail','cottontail rabbit',
    'Angora','Angora rabbit',
    'porcupine','hedgehog',
    'fox squirrel','eastern fox squirrel','Sciurus niger',
    'guinea pig','Cavia cobaya',
    'hog','pig','grunter','squealer','Sus scrofa',
    'wild boar','boar','Sus scrofa',
    'hippopotamus','hippo','river horse','Hippopotamus amphibius',
    'water buffalo','water ox','Asiatic buffalo','Bubalus bubalis',
    'ram','tup',
    'bighorn','bighorn sheep','cimarron','Rocky Mountain bighorn','Rocky Mountain eep','Ovis canadensis',
    'impala','Aepyceros melampus',
    'Arabian camel','dromedary','Camelus dromedarius',
    'polecat','fitch','foulmart','foumart','Mustela putorius',
    'black-footed ferret','ferret','Mustela nigripes',
    'skunk','polecat','wood pussy',
    'three-toed sloth','ai','Bradypus tridactylus',
    'orangutan','orang','orangutang','Pongo pygmaeus',
    'gorilla','Gorilla gorilla',
    'chimpanzee','chimp','Pan troglodytes',
    'gibbon','Hylobates lar',
    'siamang','Hylobates syndactylus','Symphalangus syndactylus',
    'guenon','guenon monkey',
    'patas','hussar monkey','Erythrocebus patas',
    'colobus','colobus monkey',
    'proboscis monkey','Nasalis larvatus',
    'capuchin','ringtail','Cebus capucinus',
    'howler monkey','howler',
    'titi','titi monkey',
    'spider monkey','Ateles geoffroyi',
    'squirrel monkey','Saimiri sciureus',
    'Madagascar cat','ring-tailed lemur','Lemur catta',
    'indri','indris','Indri indri','Indri brevicaudatus',
    'Indian elephant','Elephas maximus',
    'African elephant','Loxodonta africana',
    'lesser panda','red panda','panda','bear cat','cat bear','Ailurus fulgens',
    'giant panda','panda','panda bear','coon bear','Ailuropoda melanoleuca',
    'barracouta','snoek',
    'coho','cohoe','coho salmon','blue jack','silver salmon','Oncorhynchus kisutch',
    'rock beauty','Holocanthus tricolor',
    'gar','garfish','garpike','billfish','Lepisosteus osseus',
    'puffer','pufferfish','blowfish','globefish',
    'academic gown','academic robe',
    'accordion','piano accordion','squeeze box',
    'aircraft carrier','carrier','flattop','attack aircraft carrier',
    'airship','dirigible',
    'amphibian','amphibious vehicle',
    'apiary','bee house',
    'ashcan','trash can','garbage can','wastebin','ash bin','ash-bin','ashbin','dustb','trash barrel','trash bin',
    'backpack','back pack','knapsack','packsack','rucksack','haversack',
    'bakery','bakeshop','bakehouse',
    'balance beam','beam',
    'ballpoint','ballpoint pen','ballpen','Biro',
    'bannister','banister','balustrade','balusters','handrail',
    'barrel','cask',
    'barrow','garden cart','lawn cart','wheelbarrow',
    'bathing cap','swimming cap',
    'bathtub','bathing tub','bath','tub',
    'beach wagon','station wagon','wagon','estate car','beach waggon','station wagg','waggon',
    'bearskin','busby','shako',
    'bell cote','bell cot',
    'bicycle-built-for-two','tandem bicycle','tandem',
    'bikini','two-piece',
    'binder','ring-binder',
    'binoculars','field glasses','opera glasses',
    'bobsled','bobsleigh','bob',
    'bolo tie','bolo','bola tie','bola',
    'bonnet','poke bonnet',
    'bookshop','bookstore','bookstall',
    'bow tie','bow-tie','bowtie',
    'brass','memorial tablet','plaque',
    'brassiere','bra','bandeau',
    'breakwater','groin','groyne','mole','bulwark','seawall','jetty',
    'breastplate','aegis','egis',
    'bucket','pail',
    'bullet train','bullet',
    'butcher shop','meat market',
    'cab','hack','taxi','taxicab',
    'caldron','cauldron',
    'candle','taper','wax light',
    'can opener','tin opener',
    'carousel','carrousel','merry-go-round','roundabout','whirligig',

    'cash machine','cash dispenser','automated teller machine','automatic teller chine','automated teller','automatic teller','ATM',
    'cello','violoncello',
    'cellular telephone','cellular phone','cellphone','cell','mobile phone',
    'chain mail','ring mail','mail','chain armor','chain armour','ring armor','ring mour',
    'chiffonier','commode',
    'chime','bell','gong',
    'china cabinet','china closet',
    'church','church building',
    'cinema','movie theater','movie theatre','movie house','picture palace',
    'cleaver','meat cleaver','chopper',
    'clog','geta','patten','sabot',
    'coil','spiral','volute','whorl','helix',
    'computer keyboard','keypad',
    'confectionery','confectionary','candy store',
    'container ship','containership','container vessel',
    'corkscrew','bottle screw',
    'cornet','horn','trumpet','trump',
    'cowboy hat','ten-gallon hat',
    'crib','cot',
    'dam','dike','dyke',
    'dial telephone','dial phone',
    'diaper','nappy','napkin',
    'dining table','board',
    'dishrag','dishcloth',
    'dishwasher','dish washer','dishwashing machine',
    'disk brake','disc brake',
    'dock','dockage','docking facility',
    'dogsled','dog sled','dog sleigh',
    'doormat','welcome mat',
    'drilling platform','offshore rig',
    'drum','membranophone','tympan',
    'electric fan','blower',
    'feather boa','boa',
    'file','file cabinet','filing cabinet',
    'fire engine','fire truck',
    'fire screen','fireguard',
    'flagpole','flagstaff',
    'flute','transverse flute',
    'French horn','horn',
    'frying pan','frypan','skillet',
    'garbage truck','dustcart',
    'gasmask','respirator','gas helmet',
    'gas pump','gasoline pump','petrol pump','island dispenser',
    'golfcart','golf cart',
    'gong','tam-tam',
    'grand piano','grand',
    'greenhouse','nursery','glasshouse',
    'grille','radiator grille',
    'grocery store','grocery','food market','market',
    'hand blower','blow dryer','blow drier','hair dryer','hair drier',
    'hand-held computer','hand-held microcomputer',
    'handkerchief','hankie','hanky','hankey',
    'hard disc','hard disk','fixed disk',
    'harmonica','mouth organ','harp','mouth harp',
    'harvester','reaper',
    'home theater','home theatre',
    'hook','claw',
    'hoopskirt','crinoline',
    'horizontal bar','high bar',
    'horse cart','horse-cart',
    'iron','smoothing iron',
    'jean','blue jean','denim',
    'jeep','landrover',
    'jersey','T-shirt','tee shirt',
    'jinrikisha','ricksha','rickshaw',
    'lab coat','laboratory coat',
    'lampshade','lamp shade',
    'laptop','laptop computer',
    'lawn mower','mower',
    'lens cap','lens cover',
    'letter opener','paper knife','paperknife',
    'lighter','light','igniter','ignitor',
    'limousine','limo',
    'liner','ocean liner',
    'lipstick','lip rouge',
    'loudspeaker','speaker','speaker unit','loudspeaker system','speaker system',
    'lumbermill','sawmill',
    'mailbag','postbag',
    'mailbox','letter box',
    'maillot','tank suit',
    'marimba','xylophone',
    'maze','labyrinth',
    'medicine chest','medicine cabinet',
    'megalith','megalithic structure',
    'microphone','mike',
    'microwave','microwave oven',
    'miniskirt','mini',
    'mobile home','manufactured home',
    'motor scooter','scooter',
    'mountain bike','all-terrain bike','off-roader',
    'mouse','computer mouse',
    'notebook','notebook computer',
    'oboe','hautboy','hautbois',
    'ocarina','sweet potato',
    'odometer','hodometer','mileometer','milometer',
    'organ','pipe organ',
    'oscilloscope','scope','cathode-ray oscilloscope','CRO',
    'paddle','boat paddle',
    'paddlewheel','paddle wheel',
    'pajama','pyjama',
    'panpipe','pandean pipe','syrinx',
    'parachute','chute',
    'parallel bars','bars',
    'passenger car','coach','carriage',
    'patio','terrace',
    'pay-phone','pay-station',
    'pedestal','plinth','footstall',
    'pencil box','pencil case',
    'perfume','essence',
    'pick','plectrum','plectron',
    'picket fence','paling',
    'pickup','pickup truck',
    'piggy bank','penny bank',
    'pirate','pirate ship',
    'pitcher','ewer',
    'plane',
    'plow','plough',
    'plunger',
    'Polaroid camera','Polaroid Land camera',
    'police van','police wagon','paddy wagon','patrol wagon','wagon','black Maria',
    'pool table','billiard table','snooker table',
    'pop bottle','soda bottle',
    'pot','flowerpot',
    'prayer rug','prayer mat',
    'prison','prison house',
    'projectile','missile',
    'puck','hockey puck',
    'punching bag','punch bag','punching ball','punchball',
    'quill','quill pen',
    'quilt','comforter','comfort','puff',
    'racer','race car','racing car',
    'racket','racquet',
    'radio','wireless',
    'radio telescope','radio reflector',
    'recreational vehicle','RV','R.V.',
    'refrigerator','icebox',
    'remote control','remote',
    'restaurant','eating house','eating place','eatery',
    'revolver','six-gun','six-shooter',
    'rocking chair','rocker',
    'rubber eraser','rubber','pencil eraser',
    'rule','ruler',
    'saltshaker','salt shaker',
    'sax','saxophone',
    'scale','weighing machine',
    'screen','CRT screen',
    'seat belt','seatbelt',
    'shield','buckler',
    'shoe shop','shoe-shop','shoe store',
    'slide rule','slipstick',
    'slot','one-armed bandit',
    'snowplow','snowplough',
    'solar dish','solar collector','solar furnace',
    'spider web',
    'sports car','sport car',
    'spotlight','spot',
    'stopwatch','stop watch',
    'streetcar','tram','tramcar','trolley','trolley car',
    'studio couch','day bed',
    'stupa','tope',
    'submarine','pigboat','sub','U-boat',
    'suit','suit of clothes',
    'sunglasses','dark glasses','shades',
    'sunscreen','sunblock','sun blocker',
    'swab','swob','mop',
    'swimming trunks','bathing trunks',
    'switch','electric switch','electrical switch',
    'tank','army tank','armored combat vehicle','armoured combat vehicle',
    'teddy','teddy bear',
    'television','television system',
    'thatch','thatched roof',
    'theater curtain','theatre curtain',
    'thresher','thrasher','threshing machine',
    'tobacco shop','tobacconist shop','tobacconist',
    'tow truck','tow car','wrecker',
    'trailer truck','tractor trailer','trucking rig','rig','articulated lorry','sem','tray',
    'tricycle','trike','velocipede',
    'trolleybus','trolley coach','trackless trolley',
    'tub','vat',
    'unicycle','monocycle',
    'upright','upright piano',
    'vacuum','vacuum cleaner',
    'violin','fiddle',
    'wallet','billfold','notecase','pocketbook',
    'wardrobe','closet','press',
    'warplane','military plane',
    'washbasin','handbasin','washbowl','lavabo','wash-hand basin',
    'washer','automatic washer','washing machine',
    'wool','woolen','woollen',
    'worm fence','snake fence','snake-rail fence','Virginia fence',
    'web site','website','internet site','site',
    'crossword puzzle','crossword',
    'traffic light','traffic signal','stoplight',
    'book jacket','dust cover','dust jacket','dust wrapper',
    'hot pot','hotpot',
    'ice cream','icecream',
    'ice lolly','lolly','lollipop','popsicle',
    'bagel','beigel',
    'hotdog','hot dog','red hot',
    'zucchini','courgette',
    'cucumber','cuke',
    'artichoke','globe artichoke',
    'pineapple','ananas',
    'jackfruit','jak','jack',
    'chocolate sauce','chocolate syrup',
    'meat loaf','meatloaf',
    'pizza','pizza pie',
    'cliff','drop','drop-off',
    'lakeside','lakeshore',
    'promontory','headland','head','foreland',
    'sandbar','sand bar',
    'seashore','coast','seacoast','sea-coast',
    'valley','vale',
    'ballplayer','baseball player',
    'groom','bridegroom',
    ' yellow lady-slipper','Cypripedium calceolus','Cypripium parviflorum','corn',
    'hip','rose hip','rosehip',
    'buckeye','horse chestnut','conker',
    'stinkhorn','carrion fungus',
    'hen-of-the-woods','hen of the woods','Polyporus frondosus','Grifola frondosa',
    'ear','spike','capitulum',
    'toilet tissue','toilet paper','bathroom tissue']



const imageUpload = document.getElementById('image-upload');
const selectedImage = document.getElementById('selected-image');
const predictionElement = document.getElementById('prediction');

let model;

// Загрузка модели MobileNet
async function loadModel() {
    model = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');
    console.log('Model loaded');
}

imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        selectedImage.src = e.target.result;
        selectedImage.onload = async () => { // Добавлено ожидание загрузки изображения
            await predictImage();
        };
    }

    reader.readAsDataURL(file);
});

// Функция для предсказания
async function predictImage() {
    if (!selectedImage.complete || selectedImage.naturalHeight === 0) {
        // Убедитесь, что изображение загружено
        return;
    }

    let tensor = tf.browser.fromPixels(selectedImage)
        .resizeNearestNeighbor([224, 224]) // Изменение размера изображения
        .toFloat()
        .expandDims();

    let predictions = await model.predict(tensor).data();
    let topPrediction = Array.from(predictions)
        .map((p, i) => ({
            probability: p,
            className: MOBILENET_CLASSES[i] // MOBILENET_CLASSES - массив имен классов
        }))
        .sort((a, b) => b.probability - a.probability)[0];

    predictionElement.innerText = `${topPrediction.className}: ${topPrediction.probability.toFixed(6)}`;
}

loadModel();
