from django.shortcuts import render
from django.http import JsonResponse
from .students import students
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'students/',
        'students/create',
        
        'students/upload',
        
        'students/<id>/reviews/',

        'students/top/',
        'students/<id>',

        'students/delete/<id>',
        'students/<update>/<id>',
    ]
    return Response(routes)

@api_view(['GET'])
def getStudents(request):

    return Response(students)

@api_view(['GET'])
def getStudent(request, pk):
    student = None
    for i in students:
        if i['_id'] == pk:
            student = i
            break
    return Response(student)