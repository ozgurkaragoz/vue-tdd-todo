import {shallowMount} from '@vue/test-utils'
import CreateItem from "../../src/components/CreateItem";

const wrapper = shallowMount(CreateItem)

// Component general tests
describe('CreateItem.vue', () => {
    it('should render component', () => {
        expect(wrapper.exists()).toBe(true)
    })
})

// Input tests
describe('CreateItem.vue', () => {
    it('should has input', () => {
        expect(wrapper.find('#todoInput').exists()).toBe(true)
    })

    it('should placeholder attribute is equal to "Create a new todo"', () => {
        expect(wrapper.find('#todoInput').attributes()['placeholder']).toBe("Create a new todo")
    })
})

// Button tests
describe('CreateItem.vue', () => {
    it('should has button', () => {
        expect(wrapper.find('#todoButton').exists()).toBe(true)
    })

    it('should button\'s text is equal to "Add"', () => {
        expect(wrapper.find('#todoButton').text()).toBe("Add")
    })
})
