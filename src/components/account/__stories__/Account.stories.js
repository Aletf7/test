import Account from "../Account.vue";

export default{
    title: 'Account',
    component: Account,
    argType:{
        backgroundColor: { control: 'green' }
    }    
}

const Template = (arg, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Account },
    template: '<Account v-bind="$prop" />'
});
export const ByDefault = Template.bind({});
ByDefault.args={  };