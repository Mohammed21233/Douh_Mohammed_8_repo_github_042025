import { render, screen } from '@testing-library/react';

import Banner from './banner'


describe('Test du composant Banner', () => {
    it('le titre est bien dans le dom', () => {
        render(<Banner image='' text='Ceci est le texte' />)
        expect(screen.getByText('Ceci est le texte')).toBeInTheDocument();
    })
})