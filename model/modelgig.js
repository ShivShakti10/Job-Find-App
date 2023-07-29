



module.exports = (sequelize,Datatypes)=>{
   const Gig =  sequelize.define(
    "gigs", {
        title: {
            type : Datatypes.STRING
        } ,
        technologies: {
            type : Datatypes.STRING
        },
        description: {
            type : Datatypes.STRING
        },
        budget: {
            type : Datatypes.STRING
        },
        contact_email: {
            type : Datatypes.STRING,
            unique : true,
            allowNull : false
        },
    },
    {timestamps : true}
   );
 return Gig;
}
    
   



