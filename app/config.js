// module.exports = {
//     HOST: "localhost",
//     PORT: '5432',
//     USER: "postgres",
//     PASSWORD: "postgres",
//     DB: "saasiotim",
//     dialect: "postgres",
//     timezone: "Europe/London",  // this means UTC timezone
//     local_timezone: "Asia/Singapore", 
//     ssl: false,
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
//     billing_check_url:"http://10.99.4.7:8000/api/subscription/plan?tenant="
// };

// Host setting
module.exports = {
    HOST: "db-postgresql-nyc3-12743-do-user-17278855-0.j.db.ondigitalocean.com",
    PORT: '25060',
    USER: "doadmin",
    PASSWORD: "AVNS_4urhkLt-Lb3alpM19UP",
    DB: "defaultdb",
    dialect: "postgres",
    timezone: "Europe/London",  // this means UTC timezone
    local_timezone: "Asia/Singapore", 
    ssl: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    billing_check_url:"https://test.saas.iotwave.tpitservice.com/api/subscription/plan?tenant="
};