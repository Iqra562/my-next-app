import sql from 'better-sqlite3'

const db = sql('meals.db'); // database name

export async function  getMeals(){
    await new Promise((resolve) => setTimeout(resolve,200) )
    // throw new Error('loading meals failed')
  return  db.prepare('SELECT * FROM meals').all() //to get all rows
}