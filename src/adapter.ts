import { TestSet, TestRunner } from "alsatian";

export default function Adapter() {
    const scope: any = typeof window !== 'undefined' ? window : global;

    const karma = scope.__karma__;
    const config = karma.config;

    console.log("karma config:", config);

    const testSet = TestSet.create();

    config.files.forEach((fileInfo: any) => {
        testSet.addTestsFromFiles(fileInfo.pattern);
    });

    karma.start = () => {
        const testRunner = new TestRunner();

        // setup the output
        testRunner.outputStream
                // this will use alsatian's default output if you remove this
                // you'll get TAP or you can add your favourite TAP reporter in it's place
                //.pipe(TapBark.create().getPipeable()) 
                // pipe to the console
                .pipe(process.stdout);

        testRunner.run(testSet);
    };
};