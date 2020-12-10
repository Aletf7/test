import Button from "./Button.vue";

export default{
    title: 'Button',
    component: Button,
    argType:{
        backgroundColor: { control: 'green' }
    }    
}

const Template = (arg, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Button },
    template: '<Button v-bind="$prop" />'
});
export const ByDefault = Template.bind({});
ByDefault.args={  };