import HelloWorld from "./HelloWorld.vue";

export default{
    title: 'example/Hello',
    component: HelloWorld,
    argType:{
        backgroundColor: { control: 'green' }
    }    
}

const Template = (arg, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: {HelloWorld},
    template: '<HelloWord v-bind="$prop" />'
});
export const ByDefault = Template.bind({});
ByDefault.args={ msg: "holamundo" };