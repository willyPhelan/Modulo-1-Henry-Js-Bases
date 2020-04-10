/* eslint-disable no-undef */
const {
    factorear,
    bubbleSort,
    insertionSortLista,
    insertionSortArreglo,
    selectionSortLista,
    selectionSortDosArreglos,
    selectionSortUnArreglo,
    quickSort,
    heapSortArbol,
    heapSortArreglo,
} = require('../homework');

describe('factorear(num)', function() {
  it('Debería devolver ...?', function() {
    expect(factorear(180)).toEqual([2,2,3,3,5]);
    expect(factorear(32)).toEqual([2,2,2,2,2]);
    expect(factorear(33)).toEqual([3,11]);
    expect(factorear(1)).toEqual([1]);
  });
});

describe('bubbleSort(array)', function() {
  it('Debe retornar el array ordenado de menor a mayor', function() {
    expect(bubbleSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(bubbleSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
    expect(bubbleSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
  });
});

describe('insertionSortLista(array)', function() {
  it('Debe retornar el array ordenado de menor a mayor', function() {
    expect(insertionSortLista([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(insertionSortLista([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
    expect(insertionSortLista([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
  });
});

describe('insertionSortArreglo(array)', function() {
  it('Debe retornar el array ordenado de menor a mayor', function() {
    expect(insertionSortArreglo([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(insertionSortArreglo([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
    expect(insertionSortArreglo([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
  });
});

describe('selectionSortLista(array)', function() {
  it('Debe retornar el array ordenado de menor a mayor', function() {
    expect(selectionSortLista([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(selectionSortLista([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
    expect(selectionSortLista([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
  });
});

describe('selectionSortDosArreglos(array)', function() {
  it('Debe retornar el array ordenado de menor a mayor', function() {
    expect(selectionSortDosArreglos([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(selectionSortDosArreglos([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
    expect(selectionSortDosArreglos([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
  });
});

describe('selectionSortUnArreglo(array)', function() {
  it('Debe retornar el array ordenado de menor a mayor', function() {
    expect(selectionSortUnArreglo([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(selectionSortUnArreglo([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
    expect(selectionSortUnArreglo([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
  });
});

describe('quickSort(array)', function() {
  it('Debe retornar el array ordenado de menor a mayor', function() {
    expect(quickSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(quickSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
    expect(quickSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
  });
});

describe('heapSortArbol(array)', function() {
  it('Debe retornar el array ordenado de menor a mayor', function() {
    expect(heapSortArbol([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(heapSortArbol([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
    expect(heapSortArbol([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
  });
});

describe('heapSortArreglo(array)', function() {
  it('Debe retornar el array ordenado de menor a mayor', function() {
    expect(heapSortArreglo([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(heapSortArreglo([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
    expect(heapSortArreglo([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
  });
});


