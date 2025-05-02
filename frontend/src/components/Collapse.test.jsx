import Collapse from './Collapse';
import { render, screen, fireEvent } from '@testing-library/react';

const logement = {
    equipments: [
        'Lave-linge',
        'Sèche-linge',
        'Télévision',
    ]
}

describe('Test du composant Collapse', () => {
    it('Le composant ne doit pas render le contenu du collapse', () => {
        render(<Collapse title='Titre' content={null} ><p>Contenu caché</p></Collapse>)
        const content = screen.queryByText('Contenu caché')
        expect(content).not.toBeInTheDocument();
    })

    it('Le composant doit render le contenu du collapse', () => {
        render(<Collapse title='Titre' content={null}><p>Contenu visible</p></Collapse>)
        const title = screen.getByTestId('click')
        fireEvent.click(title);
        const content = screen.queryByText('Contenu visible')
        expect(content).toBeInTheDocument();
    })

        it('Le composant doit render le contenu du collapse avec les equipements', () => {
        render(
            <Collapse title='Titre' content={null}>    
                <ul>
                    {logement.equipments.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
            </Collapse>
        )
        const title = screen.getByTestId('click')
        fireEvent.click(title);
        const content = screen.queryByText('Télévision')
        expect(content).toBeInTheDocument();
    })





})