import { DataTypes, Model } from 'sequelize';
import url from 'url';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///animals');

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  getFullName() {
    // TODO: Implement this method
    return `${this.fname} ${this.lname}`
  }
}

// TODO: Human.init()
Human.init(
  {
    human_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: 'human',
    sequelize: db,
  },
)

export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

// TODO: Animal.init()
Animal.init (
  {
    animal_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_year: {
      type: DataTypes.INTEGER, 
    },
  },
  {
    modelName: 'animal',
    sequelize: db,
  },
)


// TODO: Define Relationship
Human.hasMany(Animal, { foreignKey: 'human_id'})
Animal.belongsTo(Human, { foreignKey: 'human_id'})


// Only execute if this file is run directly
if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
  console.log('Syncing database...');
  await db.sync();
  const animal5 = await Animal.findByPk(5)
  console.log(animal5)


  
  // If we don't manually close the connection, the script will hang a couple seconds
  // before closing.
  await db.close();
  console.log('Finished syncing database!');
}


export default db;
// export { Human, Animal };
