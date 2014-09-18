javac -cp ..\buildlib\commons-logging-1.1.1.jar;..\buildlib\mondrian-3.7.0.0-752.jar com\erpi\mdxudf\GetDateInfo.java
jar -cf ..\lib\mdxudf.jar com\erpi\mdxudf\GetDateInfo.class