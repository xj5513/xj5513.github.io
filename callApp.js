

import CallApp from "callapp-lib";


function openApp() {

    const options = {
        schema: {
            protocol: "kk://winner.com",
        },
    }
    const callLib = new CallApp(options);

    callLib.open({path:''});
}
