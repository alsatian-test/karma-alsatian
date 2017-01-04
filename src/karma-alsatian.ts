const init = (config: Array<string>) => {
    console.log("files:", config);
}

module.exports = {
    "framework:alsatian": ["factory",  init]
};