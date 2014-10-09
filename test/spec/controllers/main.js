'use strict';

describe('Controller: MainCtrl', function () {

  // cargar módulo del controlador
  beforeEach(module('tanTan4App'));

  var MainCtrl,
    scope;

  // Inicializar controlador y scope falso
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('debe añadir una lista de tareas al scope', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('debe añadir items a la lista', function () {
      scope.todo = 'Tarea 1';
      scope.addTodo();
      expect(scope.todos.length).toBe(1);
  });

  it('debe añadir y luego borrar item de la lista', function () {
      scope.todo = 'Tarea 1';
      scope.addTodo();
      scope.removeTodo(0);
      expect(scope.todos.length).toBe(0);
  });
});
