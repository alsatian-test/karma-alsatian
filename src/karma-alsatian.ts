import * as Path from "path";

const init = (config: any) => {
    config.files.unshift(
        { 
            pattern: Path.join(__dirname, "/startup.js"),
            included: true,
            served: true, 
            watched: false
        }
    );

    config.files.unshift(
        { 
            pattern: Path.join(__dirname, "/adapter.js"),
            included: true,
            served: true, 
            watched: false
        }
    );

    config.files.unshift(
        { 
            pattern: Path.join(require.resolve("alsatian"), "../**/*.js"),
            included: true,
            served: true, 
            watched: false
        }
    );

    console.log(config);
}

module.exports = {
    "framework:alsatian": ["factory",  init]
};