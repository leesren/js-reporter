export declare function utilsTool(): (e: any) => {
    noop: (e: any) => any;
    uuid: () => string;
    md5: any;
    isError: (e: any) => boolean;
    isArray: (e: any) => boolean;
    isObject: (e: any) => boolean;
    isFunction: (e: any) => boolean;
    logger: {
        trace: (e: any) => any;
        debug: (e: any) => any;
        log: (e: any) => any;
        info: (e: any) => any;
        warn: (e: any) => any;
        error: (e: any) => any;
    };
    extend: (e: any) => any;
    canReport: (e: any) => boolean;
    onListen: (e: any, t: any, n: any, r: any) => any;
    offListen: (e: any, t: any, n: any) => any;
    getMetas: () => {
        wpkBid: any;
        wpkCid: any;
        wpkRel: any;
    };
    timestamp: (e?: any) => number;
    computeSign: (e: any, t: any) => any;
    generateSeq: () => number;
    categoryToType: (e: any) => any;
    parseErrorStack: (e: any) => any;
    objToJsonString: (e: any) => any;
    objToQueryString: (e: any) => any;
    genContentHash: (e: any) => string;
    isU4HA: (e: any, t: any) => any;
    cutStr: (e: any, t: any, n: any) => void;
    dynamicConf: (e: any, t: any, n: any, r: any, o: any) => void;
};
