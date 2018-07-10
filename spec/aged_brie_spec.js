describe('Aged Brie', () => {
  describe('when Quality = 50', () => {
    it('should remain at 50', () => {
      const gildedRose = new Shop([new Item('Aged Brie', 1, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
      expect(items[0].sellIn).toEqual(0);
    });

    it('should remain at 50', () => {
      const gildedRose = new Shop([ new Item('Aged Brie', 0, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
      expect(items[0].sellIn).toEqual(-1);
    });
  });

  describe('when Quality < 50', () => {
    it('should increase by 1', () => {
      const gildedRose = new Shop([new Item('Aged Brie', 1, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(2);
      expect(items[0].sellIn).toEqual(0);
    });

    it('should increase by 1', () => {
      const gildedRose = new Shop([ new Item('Aged Brie', 0, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(3);
      expect(items[0].sellIn).toEqual(-1);
    });
    it('should only increase by 1', () => {
      const gildedRose = new Shop([ new Item('Aged Brie', 0, 49)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
      expect(items[0].sellIn).toEqual(-1);
    });
  });
});
