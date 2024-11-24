'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Events', {
      event_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      event_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      homeOdds: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      drawOdds: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      awayOdds: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Events'); // Match the table name
  },
};
