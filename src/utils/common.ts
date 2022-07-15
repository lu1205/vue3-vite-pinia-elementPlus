/*
* 防抖函数
* */
export const debounce = (func: Function, delay: number) => {
    let timeout: any = null;
    return () => {
        timeout && clearTimeout(timeout)
        timeout = setTimeout(() => {
            timeout = null;
            func.apply(this)
        }, delay)
    }
}

/*
* 节流函数
* */
export const throttle = (func: Function, delay: number) => {
    let timer: any = null;
    return (...args: any) => {
        if (!timer) {
            func.apply(this, args);
            timer = setTimeout(() => {
                timer && clearTimeout(timer)
                timer = null;
            }, delay);
        }
    }
}
