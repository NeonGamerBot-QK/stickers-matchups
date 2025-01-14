function reloadFunction() {
        window.location.reload();    
}
export function watchHash() {
    return window.addEventListener("hashchange",reloadFunction);
}

export function stopWatchingHash() {
    return window.removeEventListener("hashchange",reloadFunction);
}
