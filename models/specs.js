module.exports = function (sequelize, DataTypes) {
    var Specs = sequelize.define("specs", {
        
        name: DataTypes.STRING
    });

    Specs.associatiate = function (models) {
        
        Specs.hasMany(models.Specs, {

        });
    };

    return Specs;
};