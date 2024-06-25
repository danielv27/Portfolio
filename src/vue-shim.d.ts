// For some odd reason, TypeScript files are not able to locate *.vue files such as '@/App.vue' in the index.ts file
// This fixed it. Source https://stackoverflow.com/questions/42002394/importing-vue-components-in-typescript-file

declare module "*.vue" {
    import {DefineComponent} from "vue";
    const component: DefineComponent<{}, {}, any>
    export default component
}