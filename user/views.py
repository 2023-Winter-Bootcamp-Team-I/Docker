from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from .models import User
from .serializers import UserLoginSerializer, UserSerializer
from drf_yasg.utils import swagger_auto_schema


@swagger_auto_schema(method="post", request_body=UserSerializer)
@api_view(['POST'])  # 회원가입
@permission_classes([AllowAny])
def create_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({
            'message': '회원가입 성공',
            'data': serializer.data
        }, status=status.HTTP_201_CREATED)
    else:
        return Response({
            'message': '회원가입 실패',
            'data': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(method='POST', request_body=UserLoginSerializer)
@api_view(['POST'])  # 로그인
@permission_classes([AllowAny])
def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')
    serializer = UserLoginSerializer(data=request.data)
    user = User.objects.filter(email=email).first()

    if user is None:
        return Response({
            "message": "유저 등록이 안돼있음.",
            "result": None
        }, status=status.HTTP_400_BAD_REQUEST)

    if user.password != password:
        return Response({
            "message": "비밀번호 오류.",
            "result": None
        }, status=status.HTTP_400_BAD_REQUEST)

    if serializer.is_valid():
        return Response({
                'message': '로그인 성공',
                'result': {
                    "user_id": user.user_id,
                }
            }, status=status.HTTP_200_OK)
    return Response({
        'message': '로그인 실패',
        'data': serializer.errors
    }, status=status.HTTP_401_UNAUTHORIZED)
