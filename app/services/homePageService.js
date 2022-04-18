const Food = require("../models/foodModel");
//const {db}=require("../../config/db")


// exports.listFood = async () =>{
//     return await Food.find({}).lean();
// };

exports.getFoods = async () =>{
    const foods =await Food.find({}).lean();
    return foods;
};

exports.getNoOfPagesFoods = async () =>{
    const foods =await Food.find({}).lean();
    return foods;
};

exports.getFoodsAndCountFoods = async () =>{
    

    const foods =await Food.find({}).lean();
    const countFoods=foods.length;

    return {foods, countFoods};
};

exports.ListTeacher = async (page) =>{
    if (!page || isNaN(page)) page = 1;
    else{
        page = parseInt(page);
    }
    const NumberFoodPerPage=2;
    const skipFoodsNumber=(page-1)*NumberFoodPerPage;//2 item per page
    const foods =await Food.find({}).lean().limit(NumberFoodPerPage).skip(skipFoodsNumber);
    //const foods=food.lean();
    // const foods =await Food.find({}).limit(NumberFoodPerPage).skip(skipFoodsNumber).lean();

    return foods;
};

exports.getNumberOfFoods = async (page) =>{
    const foods =await Food.find({}).lean();
    const countFoods=foods.length;
    return countFoods;
};


// exports.listFood = async (offset=0, limit =9) =>{
//     return await Food.findAndCountAll({raw :true ,offset, limit});
// };

