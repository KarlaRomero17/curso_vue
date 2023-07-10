// Snaptchot testing

import { shallowMount, mount } from '@vue/test-utils';
import Counter from '@/components/Counter.vue';

describe('Counter component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Counter);
    })

    // test('debe de hacer match con el snapshot', () => {

    //     const wrapper = shallowMount(Counter);
    //     expect(wrapper.html() ).toMatchSnapshot();
    // })

    test('h2 debe tener el valor por defecto <Counter> (Computed)', () => {
    
            // const wrapper = shallowMount(Counter);
            expect(wrapper.find('h2').exists()).toBeTruthy()
            const h2 = wrapper.find('h2') //findAll para buscar todos los h2
            // console.log(h2.text())
            expect(h2.text()).toBe('Counter');
    })

    test('el valor por defecto debe ser 100 en el p', async() => {
        //wrapper
        // const wrapper = shallowMount(Counter);
        //pTags
        // const pTags = wrapper.findAll('p')
        const value = wrapper.find('[data-testid="counter"]').text()
        //expect segundo p === 100
        // expect(pTags[1].text()).toBe('100')
        expect(value).toBe('100')
    })

    test('debe incrementar y decrementar el contador', async() => {
        //wrapper
        // const wrapper = shallowMount(Counter);
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        // const increaseBtn = wrapper.find('button')
        await increaseBtn.trigger('click')
        let value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('101')
        
        //boton decrease
        // const decreaseBtn = wrapper.findAll('button')[1]
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('99')

    })

    test('debe establecer el valor por defecto', () => {
        //video 74
        //props
        const {start} = wrapper.props()
        const value = wrapper.find('[data-testid="counter"]').text()
        expect(Number(value)).toBe(start)
    })

    test('debe de mostrar la prop title', () => {
        const wrapper = shallowMount(Counter, {props: {title: 'Counter'} })
        expect(wrapper.find('h2').text()).toBe('Counter')
    })


    
})

//npm run test:unit 
//npm run test:unit -u //actualizar snapshot
