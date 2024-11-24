'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Events', [
            {event_name: 'Real Madrid vs Barcelona', homeOdds: 1.75, drawOdds: 2.00, awayOdds: 2.50},
            {event_name: 'Boca Junior vs Flamengo ', homeOdds: 2.00, drawOdds: 2.25, awayOdds: 2.75},
            {event_name: 'Liverpool vs Chelsea', homeOdds: 1.50, drawOdds: 2.00, awayOdds: 2.50},
            {event_name: 'M.City vs Milan', homeOdds: 1.30, drawOdds: 2.00, awayOdds: 1.50},
            {event_name: 'Benfica vs PSG', homeOdds: 3.50, drawOdds: 1.40, awayOdds: 2.20},
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Events', null, {});
        await queryInterface.bulkDelete('Users', null, {});
    }
};
