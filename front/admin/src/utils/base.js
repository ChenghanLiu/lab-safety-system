const base = {
    get() {
        return {
            url : "",
            name: "",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Python的安徽新华学院人事管理系统设计与实现"
        } 
    }
}
export default base
