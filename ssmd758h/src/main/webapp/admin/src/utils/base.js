const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmd758h/",
            name: "ssmd758h",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmd758h/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "临沂旅游咨询系统"
        } 
    }
}
export default base
