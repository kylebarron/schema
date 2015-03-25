
var schema = {
  'properties': {
    'name':             require('./partial/hash'),
    'alpha3':           require('./partial/admin'),
    'admin0':           require('./partial/admin'),
    'admin1':           require('./partial/admin'),
    'admin1_abbr':      require('./partial/admin'),
    'admin2':           require('./partial/admin'),
    'gn_id':            require('./partial/foreignkey'),
    'woe_id':           require('./partial/foreignkey'),
    'boundaries':       require('./partial/shape'),
    'center_point':     require('./partial/centroid'),
    'category':         require('./partial/category'),
    'suggest':          require('./partial/suggest')
  },
  '_source' : {
    'excludes' : ['boundaries']
  },
  '_all': {
    'enabled':          false
  },
  'dynamic':            'strict'
};

module.exports = schema;