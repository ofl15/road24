'use strict';

/**
 * verification service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::verification.verification');
