var Solicitation = DS.Model.extend({
    // Properties
    title: DS.attr('string'),
    description: DS.attr('string'),
    imageUrl: DS.attr('string'),
    value: DS.attr('string'),
    amazonUrl: DS.attr('string'),
    isOpen: DS.attr('boolean'),
    createDate: DS.attr('date'),
    updateDate: DS.attr('date'),
    // Relationships
    charity: DS.belongsTo('charity', { async: true })
});

Solicitation.reopenClass({
    FIXTURES: [
        {
            id: 10,
            title: 'Cat Litter',
            description: 'Our rescued cats need litter to go to the bathroom with.',
            imageUrl: 'http://ecx.images-amazon.com/images/I/61mr6MbphlL.jpg',
            value: '18',
            amazonUrl: 'http://www.amazon.com/dp/B004U8Z7DI',
            isOpen: true,
            createDate: '2014-05-30T00:00:00',
            updateDate: '2014-05-30T00:00:00',
            charity: 1
        }
    ]
});

export default Solicitation;

