console.log("success");

(<any>window).__karma__.start = () => {
    console.log(arguments);
}