const protocol = require('./protocolMapping');

const productNameToProductId = {
    'cocaine hydrochloride': 'C5776',
    'cocaine': 'C5776',
    'abeitic acid':'0010',
    'sodium phosphate':'342483',
    'trizma base': 'T1503',
    'dichlorophene':'35992',
    'chloromethyl methyl sulfide':'C54007',
    'phenyl cyanate solution':'744417',
    'hydrogen bromide': '295418'
};


const bodyToKey = {
  'arm': 'arm',
  'leg': 'leg',
};


const propertyToKey = {
  'physical form': 'physical_form',
  'molecular weight': 'molec_weight',
  'boiling point': 'boiling_point',
  'melting point': 'melting_point',
  'flash point': 'flash_point',
  'vapor pressure': 'vapor_pressure',
	'density': 'density',
  'p h': 'ph',  // "p h" is probably how alexa comprehends PH
  'hazard class': 'hazard_class',
  'pictogram': 'pictogram',
};


const productToProtocol = {
    'cocaine hydrochloride': protocol.cocaineHydrochloride,
    'cocaine': protocol.cocaine,
    'abeitic acid': protocol.abeiticAcid,
    'sodium phosphate': protocol.sodiumPhosphate,
    'trizma base': protocol.trizmaBase,
    'dichlorophene': protocol.dichlorophene,
    'chloromethyl methyl sulfide': protocol.chloromethylMethylSulfide,
    'phenyl cyanate solution': protocol.phenylCyanateSolution,
    'hydrogen bromide': protocol.hydrogenBromide
};

module.exports = {
    productNameToProductId: productNameToProductId,
    bodyToKey: bodyToKey,
    propertyToKey: propertyToKey,
    productToProtocol: productToProtocol,
};
